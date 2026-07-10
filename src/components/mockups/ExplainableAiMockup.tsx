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

  const categories = [
    { label: "Toxicity", value: 87, color: "#ef4444" },
    { label: "Threat", value: 54, color: "#f97316" },
    { label: "Insult", value: 41, color: "#eab308" },
  ];

  return (
    <svg viewBox="0 0 400 300" className="mockup" role="img" aria-label="Realistic mockup of a content moderation dashboard highlighting flagged tokens with an explainability breakdown">
      <defs>
        <filter id="aiShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.16" />
        </filter>
      </defs>

      <rect x="0" y="0" width="400" height="300" fill="#f4f5f7" />

      {/* window chrome */}
      <rect x="0" y="0" width="400" height="26" fill="#e5e7eb" />
      <circle cx="14" cy="13" r="4" fill="#ff5f57" />
      <circle cx="28" cy="13" r="4" fill="#febc2e" />
      <circle cx="42" cy="13" r="4" fill="#28c840" />
      <rect x="130" y="7" width="140" height="12" rx="6" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1" />
      <text x="200" y="16" textAnchor="middle" fontSize="7" fill="#9ca3af">moderation.internal/queue</text>

      {/* sidebar */}
      <rect x="0" y="26" width="52" height="274" fill="#ffffff" />
      <rect x="16" y="46" width="20" height="20" rx="6" fill="#eef2ff" />
      <rect x="16" y="78" width="20" height="20" rx="6" fill="#4f46e5" />
      <rect x="16" y="110" width="20" height="20" rx="6" fill="#eef2ff" />

      {/* header */}
      <text x="72" y="52" fontSize="13" fontWeight="700" fill="#111827">Content Review Queue</text>
      <rect x="72" y="60" width="70" height="16" rx="8" fill="#fee2e2" />
      <text x="107" y="71" textAnchor="middle" fontSize="8" fontWeight="700" fill="#dc2626">3 pending</text>

      {/* comment card */}
      <rect x="72" y="88" width="308" height="98" rx="12" fill="#ffffff" filter="url(#aiShadow)" />
      <circle cx="92" cy="108" r="10" fill="#c7d2fe" />
      <rect x="108" y="102" width="60" height="6" rx="3" fill="#374151" />
      <rect x="108" y="112" width="36" height="5" rx="2.5" fill="#d1d5db" />

      {(() => {
        let x = 92;
        const y = 138;
        return tokens.map((t, i) => {
          const width = t.text.length * 6.4 + 13;
          const el = (
            <g key={i}>
              <rect
                x={x}
                y={y - 12}
                width={width}
                height={19}
                rx="5"
                fill={t.flag ? "#fee2e2" : "#f3f4f6"}
                stroke={t.flag ? "#ef4444" : "none"}
                strokeWidth="1"
              />
              <text x={x + width / 2} y={y + 1} textAnchor="middle" fontSize="8.5" fill={t.flag ? "#dc2626" : "#374151"} fontWeight={t.flag ? 700 : 500}>
                {t.text}
              </text>
            </g>
          );
          x += width + 5;
          return el;
        });
      })()}

      <rect x="92" y="158" width="90" height="18" rx="9" fill="#4f46e5" />
      <text x="137" y="170" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">Remove content</text>
      <rect x="190" y="158" width="80" height="18" rx="9" fill="#ffffff" stroke="#d1d5db" strokeWidth="1" />
      <text x="230" y="170" textAnchor="middle" fontSize="8" fontWeight="700" fill="#374151">Approve</text>

      {/* explanation breakdown */}
      <rect x="72" y="196" width="308" height="90" rx="12" fill="#ffffff" filter="url(#aiShadow)" />
      <text x="88" y="216" fontSize="9" fontWeight="700" fill="#111827">Explanation Breakdown</text>

      {categories.map((c, i) => (
        <g key={c.label} transform={`translate(88, ${228 + i * 18})`}>
          <text x="0" y="6" fontSize="7.5" fill="#6b7280">{c.label}</text>
          <rect x="60" y="0" width="190" height="7" rx="3.5" fill="#e5e7eb" />
          <rect x="60" y="0" width={190 * (c.value / 100)} height="7" rx="3.5" fill={c.color} />
          <text x="258" y="6" fontSize="7.5" fontWeight="700" fill="#374151">{c.value}%</text>
        </g>
      ))}
    </svg>
  );
}
