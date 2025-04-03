import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { loversQuarrel } from "./fonts";
import TechBar from "@/components/TechBar";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />
      <main>
        <section className="flex flex-col items-center mt-60 pb-10">
          <h1 className={`text-8xl ${loversQuarrel.className}`}>Melissa Albarella</h1>
          <p className="text-lg">Web Developer</p>
        </section>
        <section className="bg-(--color-primary) py-12 flex flex-col justify-center items-center mt-28">
          <div className="w-full max-w-7xl px-16">
            <h2 className="text-2xl mb-8 text-white text-left">Tech Stack</h2>
            <TechBar />
          </div>
        </section>
      </main>
    </div>
  );
}
