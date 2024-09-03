import { CardSection } from "@/components/CardSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/NavBar";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1440px] flex min-h-screen flex-col items-center justify-start">
      <Navbar />
      <HeroSection />
      <CardSection />
    </main>
  );
}
