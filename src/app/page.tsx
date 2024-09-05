import { CardSection } from "@/components/CardSection";
import { Footer } from "@/components/Footer";
import { GrowSection } from "@/components/GrowSection";
import { HeroSection } from "@/components/HeroSection";
import { MapSection } from "@/components/MapSection";
import { Navbar } from "@/components/NavBar";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1440px] flex min-h-screen flex-col items-center justify-start">
      <Navbar />
      <HeroSection />
      <CardSection />
      <GrowSection />
      <MapSection />
      <Footer />
    </main>
  );
}
