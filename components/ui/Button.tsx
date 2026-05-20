import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-soft hover:shadow-glow focus-visible:ring-brand",
  secondary:
    "border border-graphite/15 bg-white/90 text-graphite hover:border-brand/40 hover:bg-white focus-visible:ring-brand",
  ghost: "bg-transparent text-brand hover:bg-brand/8 focus-visible:ring-brand",
  light:
    "bg-white text-brand hover:bg-white/90 shadow-soft focus-visible:ring-white",
};

type BaseProps = {
  variant?: Variant;
  size?: "default" | "lg";
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: Props) {
  const sizeClass =
    size === "lg"
      ? "rounded-full px-8 py-4 text-lg"
      : "rounded-full px-6 py-3.5 text-base";
  const classes = `inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 ${sizeClass} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    const isExternal =
      href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
