type ComponentProps = {
  children: React.ReactNode,
  variant?: Variant,
  color?: Color;
  className?: string;
}

type Variant = "outlined" | "primary"
type Color = "foreground-amber" | "foreground-light"