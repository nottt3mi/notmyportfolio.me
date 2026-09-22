import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f3ef] text-[#111]">
      <Navbar />
      <Hero />
    </main>
  );
}