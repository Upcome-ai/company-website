import Image from "next/image";
import logoSrc from "@/images/256x286.png";

type LogoProps = {
  size?: "nav" | "footer";
  className?: string;
};

export default function Logo({ size = "nav", className = "" }: LogoProps) {
  const textSize = size === "nav" ? "text-[26px]" : "text-[24px]";

  return (
    <a
      href="#"
      className={`flex items-center gap-3 font-serif tracking-[-0.01em] text-bone ${textSize} ${className}`}
    >
      <Image
        src={logoSrc}
        alt=""
        className="h-[34px] w-auto object-contain"
        priority={size === "nav"}
      />
      Upcome
    </a>
  );
}
