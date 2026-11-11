import { useEffect, useRef, useState } from "react"
import "./RollingNumber.css"

type RollingNumberProps = {
  value: string
  delay?: number
}

/**
 * Animated odometer counter.
 *
 * Starts when the element enters the viewport.
 * Supports reduced-motion preferences.
 * Handles changes to the value and cleans up observers.
 */
export default function RollingNumber({
  value,
  delay = 0,
}: RollingNumberProps) {
  const elementRef = useRef<HTMLSpanElement>(null)

  const [started, setStarted] = useState(false)

  const [motionAllowed, setMotionAllowed] = useState(() => {
    if (typeof window === "undefined") return false

    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  })

  const match = /^(\d+)(.*)$/.exec(value)

  const target = match ? Number(match[1]) : 0
  const suffix = match?.[2] ?? ""

  const rows = Array.from({ length: target + 1 }, (_, index) =>
    index === target ? `${index}${suffix}` : String(index),
  )

  const width = Math.max(...rows.map((row) => row.length), 1)

  const duration = Math.min(2200, Math.max(1100, target * 115))

  useEffect(() => {
    const element = elementRef.current

    if (!element || !match) return

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const handleMotionPreference = () => {
      const reduced = motionQuery.matches

      setMotionAllowed(!reduced)

      if (reduced) {
        setStarted(true)
      }
    }

    handleMotionPreference()

    motionQuery.addEventListener("change", handleMotionPreference)

    if (motionQuery.matches) {
      return () => {
        motionQuery.removeEventListener("change", handleMotionPreference)
      }
    }

    if (typeof IntersectionObserver === "undefined") {
      setStarted(true)

      return () => {
        motionQuery.removeEventListener("change", handleMotionPreference)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.45,
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()

      motionQuery.removeEventListener("change", handleMotionPreference)
    }
  }, [value])

  if (!match) {
    return <>{value}</>
  }

  return (
    <span
      ref={elementRef}
      className={`rolling-number ${
        started ? "is-started" : ""
      } relative isolate inline-block h-[1em] overflow-hidden align-top leading-none whitespace-nowrap text-inherit [font-feature-settings:"tnum"] [font-variant-numeric:tabular-nums]`}
      role="img"
      aria-label={value}
      style={{
        width: `${width}ch`,
      }}
    >
      <span
        className="rolling-number-track relative flex w-max flex-col [transform-origin:top_left] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
        aria-hidden="true"
        style={{
          transform: started
            ? `translate3d(0, -${target}em, 0)`
            : "translate3d(0, 0, 0)",

          transition: motionAllowed
            ? `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
            : "none",

          willChange: started && motionAllowed ? "transform" : "auto",
        }}
      >
        {rows.map((row, index) => (
          <span
            key={`${row}-${index}`}
            className="rolling-number-item relative block h-[1em] flex-[0_0_1em] leading-[1em] whitespace-nowrap [font-variant-numeric:tabular-nums] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
          >
            {row}
          </span>
        ))}
      </span>
    </span>
  )
}
