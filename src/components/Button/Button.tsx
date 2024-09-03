import { variantStyles } from "./Button.constants";

const Button = ({ children, variant = "primary", color = "foreground-light", className }: ComponentProps) => {
  return (
    <button className={`${variantStyles[variant]} text-${color} border-${color} py-2 leading-6 h-12 font-[450] text-[16px] tracking-wider ${className}`}>
      {children}
    </button>
  )
}

export default Button;