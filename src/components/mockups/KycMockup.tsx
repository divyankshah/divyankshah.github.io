export default function KycMockup() {
  return (
    <svg viewBox="0 0 400 300" className="mockup" role="img" aria-label="Mockup of a real-time face liveness verification scan">
      <rect x="0" y="0" width="400" height="300" fill="var(--mockup-bg)" />

      <rect x="150" y="55" width="100" height="190" rx="20" fill="none" stroke="var(--mockup-line)" strokeWidth="2.5" />
      <rect x="185" y="63" width="30" height="6" rx="3" fill="var(--mockup-line)" opacity="0.5" />

      <ellipse cx="200" cy="140" rx="34" ry="42" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="188" cy="132" r="3" fill="var(--accent)" />
      <circle cx="212" cy="132" r="3" fill="var(--accent)" />
      <path d="M188 156 Q200 166 212 156" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />

      <path d="M164 98 L164 84 L178 84" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M236 98 L236 84 L222 84" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M164 182 L164 196 L178 196" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M236 182 L236 196 L222 196" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />

      <rect x="160" y="112" width="80" height="2" fill="var(--accent)" opacity="0.8" />

      <rect x="163" y="212" width="74" height="18" rx="9" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" strokeWidth="1" />
      <text x="200" y="224" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--accent)">VERIFIED &lt;100ms</text>
    </svg>
  );
}
