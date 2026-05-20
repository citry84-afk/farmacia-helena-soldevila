import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-soft focus-visible:ring-brand",
  secondary:
    "border border-brand bg-white text-brand hover:bg-brand/5 focus-visible:ring-brand",
  ghost:
    "bg-transparent text-brand hover:bg-brand/5 focus-visible:ring-brand",
};

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonAsButton | ButtonAsLink;

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50";

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) {
  const classes = `${baseClass} ${variants[variant]} ${className}`;

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
