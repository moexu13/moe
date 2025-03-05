import Image from "next/image";
import NavBar from "@/components/NavBar";
import { loversQuarrel } from "./fonts";
const Home = () => {
  return (
    <main className="min-h-screen">
      <header className="fixed top-2 left-2 flex items-center gap-4">
        <Image 
          src="/logo.png" 
          alt="logo with pretty sweet watercolor heart between code braces" 
          width={60} 
          height={60}
          className="p-2"
        />
        <div className={`text-white text-3xl ${loversQuarrel.className}`}>Melissa Albarella</div>
        <NavBar className="flex gap-8" />
      </header>
    </main>
  );
}

export default Home;
