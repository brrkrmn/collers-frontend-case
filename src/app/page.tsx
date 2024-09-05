import { CardSection } from "@/components/CardSection";
import { Footer } from "@/components/Footer";
import { GrowSection } from "@/components/GrowSection";
import { HeroSection } from "@/components/HeroSection";
import { JoinSection } from "@/components/JoinSection";
import { MapSection } from "@/components/MapSection";
import { Navbar } from "@/components/NavBar";
import { SliderSection } from "@/components/SliderSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1440px] flex min-h-screen flex-col items-center justify-start">
      <Navbar />
      <HeroSection />
      <CardSection />
      <JoinSection />
      <SliderSection />
      <GrowSection />
      <MapSection />
      <Footer />
    </main>
  );
}
