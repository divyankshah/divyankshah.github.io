export default function KycMockup() {
  return (
    <svg viewBox="0 0 400 300" className="mockup" role="img" aria-label="Mockup of a real-time face liveness verification scan">
      <defs>
        <linearGradient id="kycScreenGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#312e81" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="400" height="300" fill="var(--mockup-bg)" />

      <rect x="150" y="55" width="100" height="190" rx="20" fill="url(#kycScreenGradient)" stroke="var(--mockup-line)" strokeWidth="2.5" />
      <rect x="185" y="63" width="30" height="6" rx="3" fill="#fff" opacity="0.35" />

      <ellipse cx="200" cy="140" rx="34" ry="42" fill="none" stroke="#60a5fa" strokeWidth="2.25" />
      <circle cx="188" cy="132" r="3" fill="#60a5fa" />
      <circle cx="212" cy="132" r="3" fill="#60a5fa" />
      <path d="M188 156 Q200 166 212 156" fill="none" stroke="#60a5fa" strokeWidth="2.25" strokeLinecap="round" />

      <path d="M164 98 L164 84 L178 84" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
      <path d="M236 98 L236 84 L222 84" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
      <path d="M164 182 L164 196 L178 196" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
      <path d="M236 182 L236 196 L222 196" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />

      <rect x="160" y="112" width="80" height="2" fill="#4ade80" opacity="0.9" />

      <rect x="160" y="210" width="80" height="20" rx="10" fill="#4ade80" />
      <text x="200" y="224" textAnchor="middle" fontSize="9" fontWeight="700" fill="#052e16">VERIFIED &lt;100ms</text>
    </svg>
  );
}
