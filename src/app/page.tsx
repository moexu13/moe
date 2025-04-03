import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { loversQuarrel } from "./fonts";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />
      <main>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className={`text-8xl ${loversQuarrel.className}`}>Melissa Albarella</h1>
          <p className="text-lg">Web Developer</p>
        </div>
      </main>
    </div>
  );
}
