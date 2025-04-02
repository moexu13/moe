import { loversQuarrel } from "@/app/fonts";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center gap-1 h-12 m-4">
      <div className="p-2">
        <Image
          src="/logo.png"
          alt="logo with pretty sweet watercolor heart between code braces"
          width={60}
          height={60}
        />
      </div>
      <span className={`text-white text-5xl ${loversQuarrel.className}`}>Melissa Albarella</span>
    </header>
  );
}
