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
        <section className="bg-(--color-primary) py-16 flex flex-col justify-center items-center mt-60 min-h-[400px]">
          <div className="w-full max-w-[90%] flex flex-col justify-center items-center">
            <div className="w-full mb-6">
              <h2 className="text-2xl text-white text-left">Tech Stack</h2>
            </div>
            <TechBar />
          </div>
        </section>
      </main>
    </div>
  );
}
