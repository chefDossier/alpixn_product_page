import Image from "next/image";
import HeroSection from "@/components/product_page/HeroSection";
import OfferSection from "@/components/product_page/OfferSection";
import DetailOfferSection from "@/components/product_page/DetailOfferSection";
import OfferSectionEnd from "@/components/product_page/OfferSectionEnd";
import DevelopperSection from "@/components/product_page/DevelopperSection";
import Outcomes from "@/components/product_page/Outcomes";
import Footer from "@/components/product_page/Footer";

export default function Home() {
  return (
    <div className="min-h-screen items-center  bg-zinc-50 font-sans dark:bg-black">
      <HeroSection /> 
      <OfferSection />
      <DetailOfferSection />
      <OfferSectionEnd />
      <DevelopperSection />
      <Outcomes />
      <Footer />
    </div>
  );
}
