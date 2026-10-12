export default function Scooter({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 520 320" role="img" aria-label="Electric scooter illustration">
      <ellipse cx="260" cy="292" rx="210" ry="10" fill="#0E1B14" opacity=".12" />
      {/* wheels */}
      <circle cx="95" cy="240" r="46" fill="#0E1B14" />
      <circle cx="95" cy="240" r="22" fill="#F6FAF7" />
      <circle cx="95" cy="240" r="7" fill="#0E1B14" />
      <circle cx="425" cy="240" r="46" fill="#0E1B14" />
      <circle cx="425" cy="240" r="22" fill="#F6FAF7" />
      <circle cx="425" cy="240" r="7" fill="#0E1B14" />
      {/* deck */}
      <path d="M95 240 L150 214 H350 L425 240" fill="none" stroke="#0E1B14" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="140" y="196" width="230" height="24" rx="12" fill="#16A34A" />
      {/* battery glow strip */}
      <rect x="170" y="203" width="130" height="8" rx="4" fill="#0E1B14" />
      <rect x="170" y="203" width="96" height="8" rx="4" fill="#4ADE80" />
      {/* stem + bar */}
      <path d="M425 240 L392 86" stroke="#0E1B14" strokeWidth="10" strokeLinecap="round" />
      <path d="M362 78 H412" stroke="#0E1B14" strokeWidth="12" strokeLinecap="round" />
      {/* headlight */}
      <circle cx="430" cy="106" r="12" fill="#16A34A" />
      <path d="M442 106 L500 90 V122 Z" fill="#16A34A" opacity=".25" />
    </svg>
  );
}
