import Image from "next/image";
import { loversQuarrel } from "./fonts";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
        <NavBar />
      </header>
    </div>
  );
}
