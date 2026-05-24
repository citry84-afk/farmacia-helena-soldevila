import Image from "next/image";
import { PHARMACY } from "@/lib/constants";

type Props = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-11 w-auto sm:h-12 md:h-[3.25rem]", priority = false }: Props) {
  return (
    <Image
      src={PHARMACY.logoSrc}
      alt="Farmacia Helena Soldevila — logo oficial"
      width={807}
      height={877}
      className={className}
      priority={priority}
    />
  );
}
