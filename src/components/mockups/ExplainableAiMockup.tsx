export default function ExplainableAiMockup() {
  const tokens = [
    { text: "This", flag: false },
    { text: "comment", flag: false },
    { text: "is", flag: false },
    { text: "hostile", flag: true },
    { text: "and", flag: false },
    { text: "targets", flag: false },
    { text: "the", flag: false },
    { text: "author", flag: true },
  ];

  return (
    <svg viewBox="0 0 400 300" className="mockup" role="img" aria-label="Mockup of an explainable AI text classifier highlighting flagged tokens">
      <defs>
        <linearGradient id="weightGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="400" height="300" fill="var(--mockup-bg)" />

      <rect x="40" y="46" width="320" height="120" rx="12" fill="none" stroke="var(--mockup-line)" strokeWidth="1.5" />
      <text x="58" y="72" fontSize="10" fill="var(--mockup-text)" opacity="0.7" fontWeight="600">INPUT TEXT</text>

      {(() => {
        let x = 58;
        const y = 100;
        return tokens.map((t, i) => {
          const width = t.text.length * 7 + 14;
          const el = (
            <g key={i}>
              <rect
                x={x}
                y={y - 14}
                width={width}
                height={22}
                rx="6"
                fill={t.flag ? "#ef4444" : "var(--mockup-bg)"}
                opacity={t.flag ? 0.16 : 1}
                stroke={t.flag ? "#ef4444" : "var(--mockup-line)"}
                strokeWidth="1"
              />
              <text x={x + width / 2} y={y + 1} textAnchor="middle" fontSize="10" fill={t.flag ? "#ef4444" : "var(--mockup-text)"} fontWeight={t.flag ? 700 : 500}>
                {t.text}
              </text>
            </g>
          );
          x += width + 6;
          return el;
        });
      })()}

      <line x1="120" y1="130" x2="120" y2="150" stroke="var(--mockup-line)" strokeWidth="1" opacity="0.5" />

      <rect x="60" y="150" width="140" height="34" rx="8" fill="#ef4444" fillOpacity="0.12" stroke="#ef4444" strokeWidth="1.5" />
      <text x="130" y="171" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ef4444">Toxicity: 0.87</text>

      <rect x="220" y="150" width="120" height="34" rx="8" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="280" y="171" textAnchor="middle" fontSize="10" fontWeight="700" fill="#3b82f6">Target: Author</text>

      <text x="58" y="220" fontSize="10" fill="var(--mockup-text)" opacity="0.7" fontWeight="600">EXPLANATION WEIGHT</text>
      <rect x="58" y="230" width="284" height="10" rx="5" fill="var(--mockup-line)" opacity="0.25" />
      <rect x="58" y="230" width="196" height="10" rx="5" fill="url(#weightGradient)" />
    </svg>
  );
}
