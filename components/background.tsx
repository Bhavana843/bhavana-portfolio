export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div className="orb absolute -top-48 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-teal-400/25" />
      <div
        className="orb absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-indigo-500/20"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="orb absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-cyan-400/15"
        style={{ animationDelay: "-11s" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06080c]/50 to-[#06080c]" />
    </div>
  );
}
