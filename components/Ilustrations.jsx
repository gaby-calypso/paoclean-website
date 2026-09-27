// Ilustraciones planas de relleno (placeholder visual) mientras llegan fotos
// reales o generadas con IA. No son fotos reales de Pao ni de clientes.

export function HeroScene() {
  return (
    <svg viewBox="0 0 400 500" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="500" fill="#F1F6F8" />
      <rect x="0" y="330" width="400" height="170" fill="#E7F1F7" />
      <rect x="240" y="60" width="120" height="150" rx="6" fill="#FFFFFF" stroke="#DCE6EA" strokeWidth="3" />
      <line x1="300" y1="60" x2="300" y2="210" stroke="#DCE6EA" strokeWidth="3" />
      <line x1="240" y1="135" x2="360" y2="135" stroke="#DCE6EA" strokeWidth="3" />
      <rect x="250" y="70" width="45" height="55" fill="#CFE3EF" />
      <rect x="305" y="70" width="45" height="55" fill="#CFE3EF" />
      <rect x="250" y="145" width="45" height="55" fill="#CFE3EF" />
      <rect x="305" y="145" width="45" height="55" fill="#CFE3EF" />
      <rect x="40" y="250" width="46" height="60" rx="4" fill="#0E6BA8" />
      <path d="M63 250c-10-30-40-40-55-35 5 25 30 40 55 35Z" fill="#2E9E5B" />
      <path d="M63 250c10-35 45-45 62-38-6 28-35 45-62 38Z" fill="#2E9E5B" />
      <circle cx="180" cy="260" r="26" fill="#094F7D" />
      <path d="M140 420c0-45 20-90 40-90s40 45 40 90Z" fill="#0E6BA8" />
      <path d="M120 340c15-25 40-30 60-15" stroke="#094F7D" strokeWidth="14" strokeLinecap="round" fill="none" />
      <circle cx="112" cy="335" r="9" fill="#F2A93B" />
      <rect x="0" y="470" width="400" height="4" fill="#0E6BA8" opacity="0.35" />
      <circle cx="330" cy="440" r="5" fill="#F2A93B" opacity="0.7" />
      <circle cx="350" cy="455" r="3" fill="#F2A93B" opacity="0.5" />
    </svg>
  );
}

export function PortraitAvatar() {
  return (
    <svg viewBox="0 0 300 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="300" fill="#E7F1F7" />
      <circle cx="150" cy="120" r="55" fill="#094F7D" />
      <path d="M75 300c0-70 34-120 75-120s75 50 75 120Z" fill="#0E6BA8" />
      <path d="M96 85c8-28 100-28 108 0 4 14 0 30-8 40-6-20-22-30-46-30s-40 10-46 30c-8-10-12-26-8-40Z" fill="#14232E" />
    </svg>
  );
}

export function BeforeScene() {
  return (
    <svg viewBox="0 0 500 320" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width="500" height="320" fill="#D8DEE1" />
      <rect x="0" y="230" width="500" height="90" fill="#C3CBCF" />
      <rect x="60" y="40" width="90" height="70" fill="#B7C0C4" transform="rotate(-4 105 75)" />
      <rect x="200" y="150" width="60" height="60" fill="#AEB8BD" transform="rotate(6 230 180)" />
      <rect x="300" y="120" width="70" height="50" fill="#B7C0C4" transform="rotate(-3 335 145)" />
      <circle cx="400" cy="70" r="4" fill="#9AA5AA" />
      <circle cx="420" cy="90" r="3" fill="#9AA5AA" />
      <circle cx="80" cy="180" r="3" fill="#9AA5AA" />
      <circle cx="150" cy="250" r="3" fill="#9AA5AA" />
    </svg>
  );
}

export function AfterScene() {
  return (
    <svg viewBox="0 0 500 320" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width="500" height="320" fill="#E7F1F7" />
      <rect x="0" y="230" width="500" height="90" fill="#CFE3EF" />
      <rect x="70" y="45" width="90" height="65" rx="4" fill="#FFFFFF" stroke="#0E6BA8" strokeWidth="2" />
      <rect x="220" y="150" width="60" height="55" rx="4" fill="#FFFFFF" stroke="#0E6BA8" strokeWidth="2" />
      <rect x="40" y="220" width="34" height="45" rx="3" fill="#0E6BA8" />
      <path d="M57 220c-8-22-30-28-40-25 4 18 22 28 40 25Z" fill="#2E9E5B" />
      <path d="M330 60 336 78 354 80 340 92 344 110 330 100 316 110 320 92 306 80 324 78Z" fill="#F2A93B" />
      <path d="M420 150 424 162 436 164 426 172 429 184 420 177 411 184 414 172 404 164 416 162Z" fill="#F2A93B" />
    </svg>
  );
}