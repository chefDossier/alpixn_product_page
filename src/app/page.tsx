import Image from "next/image";
import HeroSection from "@/components/product_page/HeroSection";
import OfferSection from "@/components/product_page/OfferSection";

export default function Home() {
  return (
    <div className="min-h-screen items-center  bg-zinc-50 font-sans dark:bg-black">
      <HeroSection /> 
      <OfferSection />
    </div>
  );
}
