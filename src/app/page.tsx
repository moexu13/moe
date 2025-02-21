import Image from "next/image";

const Home = () => {
  return (
    <main className="min-h-screen">
      <header className="pt-6 font-[family-name:var(--font-lovers-quarrel)]">
        <div className="flex items-center justify-center gap-4 p-6">
          <Image src="/logo.png" alt="logo with pretty sweet watercolor heart between code braces" width={80} height={80} />
          <h1 className="text-8xl">Melissa Albarella</h1>
        </div>
        <h2 className="text-center text-md">Building inclusive digital experiences where every user's journey matters</h2>
      </header>
    </main>
  );
}

export default Home;
