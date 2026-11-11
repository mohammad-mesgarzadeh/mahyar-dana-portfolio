export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      {diagonal ? (
        <path d="M5 15 15 5M7 5h8v8" />
      ) : (
        <path d="M3 10h14m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}
