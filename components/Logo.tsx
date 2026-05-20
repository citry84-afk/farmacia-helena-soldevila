import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-10 w-auto sm:h-11", priority = false }: Props) {
  return (
    <Image
      src="/logo.webp"
      alt="Farmacia Helena Soldevila — logo oficial"
      width={448}
      height={428}
      className={className}
      priority={priority}
    />
  );
}
