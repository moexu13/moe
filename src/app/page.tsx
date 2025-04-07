import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { loversQuarrel } from "./fonts";
import TechBar from "@/components/TechBar";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="hidden md:block">
        <Header />
      </div>
      <NavBar />
      <main className="w-full overflow-x-hidden pt-16 sm:pt-20 md:pt-32">
        <section className="flex flex-col items-center mt-8 sm:mt-16 md:mt-24 pb-4 px-4 min-h-[40vh]">
          <h1 className={`text-4xl sm:text-5xl md:text-8xl ${loversQuarrel.className} text-center`}>
            Melissa Albarella
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-center">Web Developer</p>
        </section>
        <section className="bg-(--color-primary) py-8 sm:py-12 md:py-16 flex flex-col justify-center items-center mt-6 min-h-[200px] md:min-h-[300px]">
          <div className="w-full max-w-[95%] md:max-w-[90%] flex flex-col justify-center items-center px-4">
            <div className="w-full mb-4 md:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl text-white text-left">Tech Stack</h2>
            </div>
            <TechBar />
          </div>
        </section>
        <section id="portfolio" className="bg-(--color-secondary)/90 py-8 sm:py-12 md:py-16 flex flex-col justify-center items-center min-h-[200px] md:min-h-[300px]">
          <section className="w-full flex justify-center items-center">
            <div className="w-full max-w-[95%]">
              <Portfolio />
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
