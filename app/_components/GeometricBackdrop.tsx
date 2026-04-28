export default function GeometricBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      ].join(" ")}
    >
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.20),transparent_62%)]" />
      <div className="absolute -bottom-32 right-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_66%)]" />

      <svg
        className="absolute left-1/2 top-[-140px] h-[700px] w-[1100px] -translate-x-1/2 opacity-35"
        viewBox="0 0 1100 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 190 L360 40 L670 190 L360 340 Z"
          stroke="rgba(255,215,0,0.45)"
          strokeWidth="2"
        />
        <path
          d="M740 120 L1030 280 L900 560 L610 400 Z"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="2"
        />
        <path
          d="M0 520 L1100 260"
          stroke="rgba(255,215,0,0.18)"
          strokeWidth="2"
        />
        <path
          d="M0 610 L1100 350"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
