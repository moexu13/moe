import Image from "next/image";
import { loversQuarrel } from "./fonts";
import NavBar from "@/components/NavBar";

const Home = () => {
  return (
    <main className="min-h-screen">
      <header className="flex items-center gap-4 h-16 bg-gradient-radial from-[var(--color-primary)] to-[var(--color-primary)]/60">
        <Image 
          src="/logo.png" 
          alt="logo with pretty sweet watercolor heart between code braces" 
          width={60} 
          height={60}
          className="p-2"
        />
        <span className={`text-white text-3xl ${loversQuarrel.className}`}>Melissa Albarella</span>
        <NavBar />
      </header>
    </main>
  );
}

export default Home;
