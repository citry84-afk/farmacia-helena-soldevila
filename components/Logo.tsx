export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="18" y="4" width="12" height="40" rx="2" fill="#2F7D5B" />
      <rect x="4" y="18" width="40" height="12" rx="2" fill="#2F7D5B" />
      <path
        d="M10 24C16 20 22 28 28 24C32 22 36 24 38 24"
        stroke="#FAFAF7"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
