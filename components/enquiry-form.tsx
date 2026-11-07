"use client";

import { useRef, useState } from "react";
import { AlertCircle, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const requirements = [
  { value: "pump-equipment", label: "A pump or equipment" },
  { value: "installation", label: "Pump installation" },
  { value: "removal", label: "Pump removal or extraction" },
  { value: "repair", label: "Pump repair or servicing" },
  { value: "rewinding", label: "Motor rewinding" },
  { value: "flushing", label: "Borewell flushing or cleaning" },
  { value: "inspection", label: "On-site inspection or pump selection" },
  { value: "other", label: "Something else" },
] as const;

type FormValues = {
  name: string;
  requirement: string;
  location: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type SubmitStatus = "idle" | "opened" | "blocked";

const initialValues: FormValues = {
  name: "",
  requirement: "",
  location: "",
  details: "",
};

export function EnquiryForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setStatus("idle");
    setPreparedUrl(null);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.requirement) {
      nextErrors.requirement = "Please choose a requirement.";
    }
    if (!values.details.trim()) {
      nextErrors.details = "Please add a short description of the requirement.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      setPreparedUrl(null);
      const firstField = Object.keys(nextErrors)[0];
      requestAnimationFrame(() => {
        document.getElementById(`enquiry-${firstField}`)?.focus();
      });
      return;
    }

    const requirementLabel =
      requirements.find((item) => item.value === values.requirement)?.label ??
      "General enquiry";

    const lines = [
      "Hello Standard Pumps & Borewells, I would like to enquire.",
      `Name: ${values.name.trim()}`,
      `Requirement: ${requirementLabel}`,
      values.location.trim() ? `Location: ${values.location.trim()}` : null,
      `Details: ${values.details.trim()}`,
    ].filter((line): line is string => Boolean(line));

    const url = whatsappUrl(lines.join("\n"));
    setPreparedUrl(url);
    const opened = window.open(url, "_blank");
    if (opened) opened.opener = null;
    setStatus(opened ? "opened" : "blocked");
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  return (
    <form className="enquiry-form" onSubmit={submit} noValidate>
      <div className="form-intro">
        <p className="form-kicker">WhatsApp enquiry</p>
        <h2>Put the requirement into a message.</h2>
        <p>
          This form does not send anything to a server. It opens WhatsApp with
          your details filled in, and you choose whether to send the message.
        </p>
      </div>

      {Object.keys(errors).length > 0 ? (
        <div className="form-alert" role="alert">
          <AlertCircle aria-hidden="true" size={18} />
          <p>Please check the highlighted fields and try again.</p>
        </div>
      ) : null}

      <div className="form-grid">
        <div className="field">
          <label htmlFor="enquiry-name">
            Your name <span className="field-required">Required</span>
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "enquiry-name-error" : undefined}
          />
          {errors.name ? (
            <p className="field-error" id="enquiry-name-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="enquiry-requirement">
            What do you need?{" "}
            <span className="field-required">Required</span>
          </label>
          <select
            id="enquiry-requirement"
            name="requirement"
            value={values.requirement}
            onChange={(event) => update("requirement", event.target.value)}
            required
            aria-invalid={Boolean(errors.requirement)}
            aria-describedby={
              errors.requirement ? "enquiry-requirement-error" : undefined
            }
          >
            <option value="">Select a requirement</option>
            {requirements.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          {errors.requirement ? (
            <p className="field-error" id="enquiry-requirement-error">
              {errors.requirement}
            </p>
          ) : null}
        </div>

        <div className="field field-full">
          <label htmlFor="enquiry-location">
            Area or landmark <span className="field-optional">Optional</span>
          </label>
          <input
            id="enquiry-location"
            name="location"
            type="text"
            value={values.location}
            onChange={(event) => update("location", event.target.value)}
            placeholder="For example, Attapur or a nearby landmark"
          />
        </div>

        <div className="field field-full">
          <label htmlFor="enquiry-details">
            Details <span className="field-required">Required</span>
          </label>
          <textarea
            id="enquiry-details"
            name="details"
            rows={5}
            value={values.details}
            onChange={(event) => update("details", event.target.value)}
            placeholder="Pump type, borewell depth if known, the issue, or the water requirement."
            required
            aria-invalid={Boolean(errors.details)}
            aria-describedby={
              errors.details ? "enquiry-details-error" : undefined
            }
          />
          {errors.details ? (
            <p className="field-error" id="enquiry-details-error">
              {errors.details}
            </p>
          ) : null}
        </div>
      </div>

      <div className="form-actions">
        <button className="button button-primary" type="submit">
          <MessageCircle aria-hidden="true" size={18} />
          <span>Open WhatsApp with this message</span>
        </button>
        <p className="form-note">
          Nothing is stored on this site. WhatsApp opens in a new tab, and you
          can review the message before sending it.
        </p>
      </div>

      <div
        ref={statusRef}
        className="form-status"
        role="status"
        aria-live="polite"
        tabIndex={-1}
      >
        {status === "opened" ? (
          <p>
            WhatsApp was opened in a new tab. If you do not see it,{" "}
            {preparedUrl ? (
              <a
                href={preparedUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                open the prepared message
              </a>
            ) : null}
            .
          </p>
        ) : null}
        {status === "blocked" ? (
          <p>
            The browser did not open a new tab.{" "}
            {preparedUrl ? (
              <a
                href={preparedUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the prepared message in WhatsApp
              </a>
            ) : null}
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
