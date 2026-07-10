export default function EventDrivenMockup() {
  const bars = [21, 29, 25, 38, 32, 41, 35, 45, 39, 48];
  const services = [
    { name: "Account Service", detail: "publishing events", color: "#4f46e5" },
    { name: "Notify Service", detail: "consuming · 0.2s lag", color: "#7c3aed" },
    { name: "Ledger Service", detail: "consuming · 0.1s lag", color: "#059669" },
  ];

  return (
    <svg viewBox="0 0 400 300" className="mockup" role="img" aria-label="Realistic mockup of an event stream monitoring dashboard showing Kafka throughput and consumer health">
      <defs>
        <filter id="eventShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.16" />
        </filter>
        <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="400" height="300" fill="#f4f5f7" />

      {/* window chrome */}
      <rect x="0" y="0" width="400" height="26" fill="#e5e7eb" />
      <circle cx="14" cy="13" r="4" fill="#ff5f57" />
      <circle cx="28" cy="13" r="4" fill="#febc2e" />
      <circle cx="42" cy="13" r="4" fill="#28c840" />
      <rect x="130" y="7" width="140" height="12" rx="6" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1" />
      <text x="200" y="16" textAnchor="middle" fontSize="7" fill="#9ca3af">kafka.internal/monitor</text>

      <text x="20" y="46" fontSize="13" fontWeight="700" fill="#111827">Event Stream Monitor</text>

      {/* stat tiles */}
      {[
        { label: "Throughput", value: "12.4k/s", x: 20 },
        { label: "Consumer Lag", value: "0.2s", x: 148 },
        { label: "Active Topics", value: "6", x: 276 },
      ].map((s) => (
        <g key={s.label} transform={`translate(${s.x}, 56)`}>
          <rect width="104" height="46" rx="10" fill="#ffffff" filter="url(#eventShadow)" />
          <text x="12" y="20" fontSize="14" fontWeight="700" fill="#111827">{s.value}</text>
          <text x="12" y="34" fontSize="7.5" fill="#6b7280">{s.label}</text>
        </g>
      ))}

      {/* throughput chart */}
      <rect x="20" y="114" width="360" height="88" rx="12" fill="#ffffff" filter="url(#eventShadow)" />
      <text x="34" y="132" fontSize="8.5" fontWeight="700" fill="#111827">account-events topic · messages/sec</text>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={34 + i * 33}
          y={190 - h}
          width="20"
          height={h}
          rx="3"
          fill="url(#barGradient)"
          opacity={i === bars.length - 1 ? 1 : 0.85}
        />
      ))}
      <line x1="34" y1="190" x2="366" y2="190" stroke="#e5e7eb" strokeWidth="1" />

      {/* service health list */}
      <rect x="20" y="212" width="360" height="72" rx="12" fill="#ffffff" filter="url(#eventShadow)" />
      {services.map((s, i) => (
        <g key={s.name} transform={`translate(36, ${230 + i * 20})`}>
          <circle cx="4" cy="0" r="4" fill={s.color} />
          <text x="16" y="3" fontSize="8.5" fontWeight="700" fill="#111827">{s.name}</text>
          <text x="360" y="3" textAnchor="end" fontSize="7.5" fill="#6b7280">{s.detail}</text>
        </g>
      ))}
    </svg>
  );
}
