export default function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <img
      className={
        footer
          ? "brand-logo block h-[27px] w-[44px] object-contain max-[600.01px]:h-[26px] max-[600.01px]:w-[42px]"
          : "brand-logo block h-[29px] w-[47px] object-contain max-[600.01px]:h-[26px] max-[600.01px]:w-[42px]"
      }
      src="/assets/brand/mahyar-dana-logo.png"
      alt=""
      width="732"
      height="420"
    />
  )
}
