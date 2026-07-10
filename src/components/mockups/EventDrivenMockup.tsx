export default function EventDrivenMockup() {
  return (
    <svg viewBox="0 0 400 300" className="mockup" role="img" aria-label="Diagram of event-driven microservices connected through a Kafka message stream">
      <defs>
        <linearGradient id="kafkaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#8b5cf6" />
        </marker>
        <marker id="arrowTeal" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#10b981" />
        </marker>
      </defs>

      <rect x="0" y="0" width="400" height="300" fill="var(--mockup-bg)" />
      <line x1="60" y1="150" x2="340" y2="150" stroke="var(--mockup-line)" strokeWidth="1.5" strokeDasharray="5 6" opacity="0.5" />

      <g>
        <rect x="20" y="118" width="80" height="64" rx="12" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1.75" />
        <text x="60" y="146" textAnchor="middle" fontSize="10.5" fill="#3b82f6" fontWeight="700">Account</text>
        <text x="60" y="160" textAnchor="middle" fontSize="10.5" fill="#3b82f6" fontWeight="700">Service</text>
      </g>

      <g>
        <rect x="160" y="86" width="80" height="128" rx="14" fill="url(#kafkaGradient)" />
        <rect x="160" y="86" width="80" height="128" rx="14" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.4" />
        <text x="200" y="144" textAnchor="middle" fontSize="10.5" fill="#fff" fontWeight="700">Kafka</text>
        <text x="200" y="158" textAnchor="middle" fontSize="10.5" fill="#fff" fontWeight="700">Topic</text>
        <circle cx="200" cy="112" r="3.5" fill="#fff" opacity="0.9" />
        <circle cx="200" cy="188" r="3.5" fill="#fff" opacity="0.9" />
      </g>

      <g>
        <rect x="300" y="68" width="80" height="56" rx="12" fill="#8b5cf6" fillOpacity="0.12" stroke="#8b5cf6" strokeWidth="1.75" />
        <text x="340" y="92" textAnchor="middle" fontSize="10.5" fill="#8b5cf6" fontWeight="700">Notify</text>
        <text x="340" y="106" textAnchor="middle" fontSize="10.5" fill="#8b5cf6" fontWeight="700">Service</text>
      </g>

      <g>
        <rect x="300" y="176" width="80" height="56" rx="12" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth="1.75" />
        <text x="340" y="200" textAnchor="middle" fontSize="10.5" fill="#10b981" fontWeight="700">Ledger</text>
        <text x="340" y="214" textAnchor="middle" fontSize="10.5" fill="#10b981" fontWeight="700">Service</text>
      </g>

      <path d="M240 108 Q270 96 300 96" fill="none" stroke="#8b5cf6" strokeWidth="1.75" opacity="0.8" markerEnd="url(#arrowPurple)" />
      <path d="M240 192 Q270 204 300 204" fill="none" stroke="#10b981" strokeWidth="1.75" opacity="0.8" markerEnd="url(#arrowTeal)" />
    </svg>
  );
}
