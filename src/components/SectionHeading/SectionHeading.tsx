type SectionHeadingProps = {
  eyebrow: string

  title: string

  subtitle?: string
}

export default function SectionHeading({
  eyebrow,

  title,

  subtitle,
}: SectionHeadingProps) {
  return (
    <header className="section-heading reveal mx-auto mb-[clamp(42px,6vw,78px)] grid w-full max-w-[var(--max)] grid-cols-[minmax(160px,.7fr)_2fr] items-start gap-5 max-[600.01px]:mb-[39px] max-[600.01px]:block">
      <div className="eyebrow flex items-center gap-[13px] pt-[10px] font-[family-name:var(--mono)] text-[10px] leading-[normal] text-[var(--cyan)] uppercase tracking-[.13em] max-[600.01px]:pt-0 max-[600.01px]:text-[9px]">
        <span>{eyebrow}</span>
        <i className="h-px w-[28px] bg-[var(--cyan)] opacity-60" />
      </div>
      <h2 className="m-0 font-[family-name:var(--display)] text-[clamp(38px,5.3vw,66px)] leading-none font-medium tracking-[-.06em] max-[600.01px]:mt-5 max-[600.01px]:text-[clamp(38px,10vw,48px)]">
        {title}
      </h2>
      {subtitle && (
        <p className="col-start-2 m-0 max-w-[560px] text-[14px] leading-[1.8] text-[var(--text-secondary)] max-[600.01px]:mt-[15px] max-[600.01px]:text-[12px]">
          {subtitle}
        </p>
      )}
    </header>
  )
}
