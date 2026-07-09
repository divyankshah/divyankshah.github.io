export default function EventDrivenMockup() {
  return (
    <svg viewBox="0 0 400 300" className="mockup" role="img" aria-label="Diagram of event-driven microservices connected through a Kafka message stream">
      <rect x="0" y="0" width="400" height="300" fill="var(--mockup-bg)" />
      <line x1="60" y1="150" x2="340" y2="150" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />

      <g>
        <rect x="24" y="120" width="72" height="60" rx="10" fill="none" stroke="var(--mockup-line)" strokeWidth="1.5" />
        <text x="60" y="146" textAnchor="middle" fontSize="10" fill="var(--mockup-text)" fontWeight="600">Account</text>
        <text x="60" y="160" textAnchor="middle" fontSize="10" fill="var(--mockup-text)" fontWeight="600">Service</text>
      </g>

      <g>
        <rect x="164" y="90" width="72" height="120" rx="12" fill="var(--accent)" opacity="0.12" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="200" y="144" textAnchor="middle" fontSize="10" fill="var(--accent)" fontWeight="700">Kafka</text>
        <text x="200" y="158" textAnchor="middle" fontSize="10" fill="var(--accent)" fontWeight="700">Topic</text>
        <circle cx="200" cy="115" r="3" fill="var(--accent)" />
        <circle cx="200" cy="185" r="3" fill="var(--accent)" />
      </g>

      <g>
        <rect x="304" y="70" width="72" height="52" rx="10" fill="none" stroke="var(--mockup-line)" strokeWidth="1.5" />
        <text x="340" y="92" textAnchor="middle" fontSize="10" fill="var(--mockup-text)" fontWeight="600">Notify</text>
        <text x="340" y="106" textAnchor="middle" fontSize="10" fill="var(--mockup-text)" fontWeight="600">Service</text>
      </g>

      <g>
        <rect x="304" y="178" width="72" height="52" rx="10" fill="none" stroke="var(--mockup-line)" strokeWidth="1.5" />
        <text x="340" y="200" textAnchor="middle" fontSize="10" fill="var(--mockup-text)" fontWeight="600">Ledger</text>
        <text x="340" y="214" textAnchor="middle" fontSize="10" fill="var(--mockup-text)" fontWeight="600">Service</text>
      </g>

      <path d="M236 110 Q270 96 304 96" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" markerEnd="url(#arrow)" />
      <path d="M236 190 Q270 204 304 204" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" markerEnd="url(#arrow)" />

      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--accent)" opacity="0.7" />
        </marker>
      </defs>
    </svg>
  );
}
