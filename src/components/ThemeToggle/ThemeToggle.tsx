export type Theme = "light" | "dark"

function ThemeIcon({ theme }: { theme: Theme }) {
  return theme === "dark" ? (
    <svg
      className="h-[17px] w-[17px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
    </svg>
  ) : (
    <svg
      className="h-[17px] w-[17px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.2 15.1A8.3 8.3 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
    </svg>
  )
}

export default function ThemeToggle({
  theme,

  onToggle,
}: {
  theme: Theme

  onToggle: () => void
}) {
  return (
    <button
      className="theme-toggle inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-2 border-0 bg-transparent px-2 text-[var(--text-secondary)] transition-[transform_240ms_var(--motion-ease),box-shadow_240ms_ease,background-color_240ms_ease,border-color_240ms_ease] hover:-translate-y-[2px] hover:text-[var(--text)]"
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <ThemeIcon theme={theme} />
      <span className="font-[family-name:var(--mono)] text-[9px] leading-[normal] uppercase tracking-[.08em]">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  )
}
