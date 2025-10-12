export default function Logo({ className = "w-7 h-7" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0ea5e9"/>
          <stop offset="1" stopColor="#22c55e"/>
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#g)" strokeWidth="2"/>
      <path d="M8 12h8M12 8v8" stroke="url(#g)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
