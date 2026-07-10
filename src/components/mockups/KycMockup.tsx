export default function KycMockup() {
  return (
    <svg viewBox="0 0 400 300" className="mockup" role="img" aria-label="Realistic mockup of a mobile identity verification app performing a liveness scan">
      <defs>
        <linearGradient id="kycBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#eef2f7" />
        </linearGradient>
        <radialGradient id="kycCamera" cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
        <filter id="kycShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* device frame */}
      <rect x="128" y="16" width="144" height="268" rx="26" fill="#111827" />
      <rect x="133" y="21" width="134" height="258" rx="21" fill="url(#kycBg)" />
      <rect x="178" y="26" width="44" height="7" rx="3.5" fill="#111827" />

      {/* status bar */}
      <text x="145" y="42" fontSize="8.5" fontWeight="700" fill="#111827">9:41</text>
      <g fill="#111827">
        <rect x="242" y="35" width="2.3" height="5" rx="0.6" />
        <rect x="246" y="33" width="2.3" height="7" rx="0.6" />
        <rect x="250" y="31" width="2.3" height="9" rx="0.6" />
        <rect x="257" y="32" width="10" height="7.5" rx="2" fill="none" stroke="#111827" strokeWidth="1" />
        <rect x="258.3" y="33.3" width="6" height="5" rx="1" />
      </g>

      {/* app header */}
      <path d="M144 55 L139 60 L144 65" fill="none" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="200" y="63" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#111827">Identity Verification</text>

      {/* camera viewfinder */}
      <rect x="141" y="75" width="118" height="120" rx="14" fill="url(#kycCamera)" />
      <ellipse cx="200" cy="130" rx="30" ry="37" fill="none" stroke="#38bdf8" strokeWidth="1.75" opacity="0.9" />
      <circle cx="190" cy="122" r="2.6" fill="#38bdf8" opacity="0.9" />
      <circle cx="210" cy="122" r="2.6" fill="#38bdf8" opacity="0.9" />
      <path d="M190 142 Q200 150 210 142" fill="none" stroke="#38bdf8" strokeWidth="1.75" strokeLinecap="round" opacity="0.9" />

      <path d="M153 91 L153 82 L162 82" fill="none" stroke="#4ade80" strokeWidth="2.75" strokeLinecap="round" />
      <path d="M247 91 L247 82 L238 82" fill="none" stroke="#4ade80" strokeWidth="2.75" strokeLinecap="round" />
      <path d="M153 179 L153 188 L162 188" fill="none" stroke="#4ade80" strokeWidth="2.75" strokeLinecap="round" />
      <path d="M247 179 L247 188 L238 188" fill="none" stroke="#4ade80" strokeWidth="2.75" strokeLinecap="round" />
      <rect x="151" y="128" width="98" height="1.6" fill="#4ade80" opacity="0.85" />

      <text x="200" y="208" textAnchor="middle" fontSize="7.5" fill="#6b7280">Hold steady and look at the camera</text>

      {/* success card */}
      <rect x="141" y="217" width="118" height="52" rx="12" fill="#ffffff" filter="url(#kycShadow)" />
      <circle cx="163" cy="243" r="11" fill="#dcfce7" />
      <path d="M158 243 L162 247 L169 238" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="180" y="240" fontSize="9.5" fontWeight="700" fill="#111827">Identity Verified</text>
      <text x="180" y="252" fontSize="7.5" fill="#6b7280">Liveness confirmed in 87ms</text>
    </svg>
  );
}
