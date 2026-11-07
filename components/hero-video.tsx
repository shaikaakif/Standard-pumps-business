"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

type PlaybackState = "idle" | "playing" | "paused" | "ended" | "error";

const reelSummary =
  "A 40-second Hinglish reel introducing Standard Pumps & Borewells: home, farm and commercial water needs; submersible and booster pumps; brand options; installation, removal, repair, motor rewinding and on-site support; and the Attapur Ring Road location with the shop phone number.";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<PlaybackState>("idle");

  const playReel = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => setState("error"));
  };

  const showPlay = state === "idle" || state === "paused" || state === "ended";

  return (
    <div className="video-stage">
      <div className="video-frame">
        <video
          ref={videoRef}
          className="reel-video"
          poster="/images/video/standard-pumps-poster.jpg"
          preload="metadata"
          controls
          playsInline
          width={1080}
          height={1920}
          aria-label="Standard Pumps & Borewells promotional reel with on-screen Hinglish text"
          aria-describedby="reel-description"
          onPlay={() => setState("playing")}
          onPause={() => setState("paused")}
          onEnded={() => setState("ended")}
          onError={() => setState("error")}
        >
          <source src="/videos/standard-pumps-reel.mp4" type="video/mp4" />
          <span>Your browser does not support the video element.</span>
        </video>

        {state === "error" ? (
          <div className="video-error" role="alert">
            <p>The reel could not play in this browser.</p>
            <a
              className="text-link"
              href="/videos/standard-pumps-reel.mp4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the reel directly
            </a>
          </div>
        ) : null}

        {showPlay ? (
          <a
            className="video-play"
            href="/videos/standard-pumps-reel.mp4"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playReel}
            aria-label="Play the reel"
          >
            <span className="video-play-icon" aria-hidden="true">
              <Play size={20} fill="currentColor" strokeWidth={1.5} />
            </span>
            <span>{state === "paused" || state === "ended" ? "Play again" : "Play the reel"}</span>
          </a>
        ) : null}
      </div>

      <div className="video-meta">
        <span>Business reel</span>
        <span>40 seconds</span>
      </div>

      <p id="reel-description" className="sr-only">
        {reelSummary}
      </p>

      <details className="reel-notes">
        <summary>What the reel covers</summary>
        <p>
          {reelSummary} The reel uses on-screen Hinglish text. No separate
          caption file or narration transcript was supplied with the project.
        </p>
      </details>
    </div>
  );
}
