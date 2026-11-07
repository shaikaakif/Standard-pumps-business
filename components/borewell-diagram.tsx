export function BorewellDiagram() {
  return (
    <figure className="diagram-wrap">
      <svg
        className="system-diagram"
        viewBox="0 0 430 560"
        role="img"
        aria-labelledby="system-diagram-title system-diagram-desc"
      >
        <title id="system-diagram-title">
          Illustrative borewell pump system
        </title>
        <desc id="system-diagram-desc">
          A diagram showing a control panel at ground level, a cable and column
          pipe running down a borewell casing to a submersible pump below the
          water level.
        </desc>

        <line
          className="diagram-line"
          x1="32"
          y1="86"
          x2="398"
          y2="86"
          vectorEffect="non-scaling-stroke"
        />

        <rect
          className="diagram-water"
          x="120"
          y="300"
          width="92"
          height="220"
        />
        <line
          className="diagram-water-line"
          x1="120"
          y1="300"
          x2="212"
          y2="300"
          vectorEffect="non-scaling-stroke"
        />

        <rect
          className="diagram-line"
          x="120"
          y="86"
          width="92"
          height="434"
          rx="3"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          className="diagram-line"
          x="130"
          y="86"
          width="72"
          height="434"
          rx="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
          opacity="0.35"
        />

        <g className="diagram-ticks">
          {Array.from({ length: 12 }, (_, i) => {
            const y = 122 + i * 33;
            const long = i % 3 === 0;
            return (
              <line
                key={y}
                x1={long ? 100 : 108}
                y1={y}
                x2="120"
                y2={y}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </g>

        <line
          className="diagram-strong"
          x1="158"
          y1="110"
          x2="158"
          y2="414"
          vectorEffect="non-scaling-stroke"
        />
        <line
          className="diagram-line"
          x1="170"
          y1="110"
          x2="170"
          y2="414"
          vectorEffect="non-scaling-stroke"
        />

        <polyline
          className="diagram-dash"
          points="306,86 306,118 214,146 198,190 198,410"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />

        <rect
          className="diagram-panel"
          x="286"
          y="28"
          width="78"
          height="58"
          rx="3"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <line
          className="diagram-line"
          x1="296"
          y1="45"
          x2="332"
          y2="45"
          vectorEffect="non-scaling-stroke"
        />
        <line
          className="diagram-line"
          x1="296"
          y1="55"
          x2="322"
          y2="55"
          vectorEffect="non-scaling-stroke"
        />
        <circle
          className="diagram-dot"
          cx="350"
          cy="72"
          r="4"
          vectorEffect="non-scaling-stroke"
        />

        <rect
          className="diagram-pump"
          x="132"
          y="414"
          width="52"
          height="62"
          rx="4"
          vectorEffect="non-scaling-stroke"
        />
        <line
          className="diagram-pump-line"
          x1="132"
          y1="431"
          x2="184"
          y2="431"
          vectorEffect="non-scaling-stroke"
        />
        <line
          className="diagram-pump-line"
          x1="132"
          y1="449"
          x2="184"
          y2="449"
          vectorEffect="non-scaling-stroke"
        />
        <line
          className="diagram-pump-line"
          x1="132"
          y1="467"
          x2="184"
          y2="467"
          vectorEffect="non-scaling-stroke"
        />
        <line
          className="diagram-strong"
          x1="158"
          y1="476"
          x2="158"
          y2="506"
          vectorEffect="non-scaling-stroke"
        />

        <line
          className="diagram-line"
          x1="224"
          y1="300"
          x2="250"
          y2="300"
          vectorEffect="non-scaling-stroke"
        />
        <line
          className="diagram-line"
          x1="224"
          y1="445"
          x2="252"
          y2="445"
          vectorEffect="non-scaling-stroke"
        />
        <line
          className="diagram-line"
          x1="224"
          y1="164"
          x2="252"
          y2="164"
          vectorEffect="non-scaling-stroke"
        />
        <line
          className="diagram-line"
          x1="120"
          y1="506"
          x2="86"
          y2="506"
          vectorEffect="non-scaling-stroke"
        />

        <text className="diagram-label diagram-label-accent" x="286" y="18">
          Control panel
        </text>
        <text className="diagram-label" x="256" y="160">
          Cable
        </text>
        <text className="diagram-label" x="256" y="296">
          Water level
        </text>
        <text className="diagram-label" x="256" y="441">
          Submersible pump
        </text>
        <text className="diagram-label" x="36" y="530">
          Borewell casing
        </text>

        <text className="diagram-small" x="32" y="70">
          Ground level
        </text>
      </svg>
      <figcaption>
        Illustrative system layout: control panel, cable, column pipe, pump and
        water level. Not to scale.
      </figcaption>
    </figure>
  );
}
