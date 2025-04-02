import Image from "next/image";
import { loversQuarrel } from "./fonts";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
    </div>
  );
}
