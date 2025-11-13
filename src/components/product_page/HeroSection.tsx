import Header from "./Header";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
  return (
    <div className="relative w-full">
      <Header />
      
      <section
        className={`heroSection bg-hero-noir
          flex flex-col items-center justify-center text-center
          min-h-screen                   
          w-full
          p-10                          
          text-white
          
          /* Utilisation de la classe de dégradé complexe définie dans la config */
          
          /* Compensation du Header fixe */
          pt-[80px] 
        `}
      >
        <p className="font-light pb-10">Enhance Business Agility and Customer Support Operations</p>
        <h1   
          className="text-4xl md:text-5xl font-extrabold mb-5"
        >
          JFT AI Chatbot
        </h1>
        
        <p
          className="text-lg mb-8 max-w-2xl"
        >
          A transformative AI-powered chatbot solution designed to enhance customer engagement, streamline support, and boost conversion rates through intelligent, real-time interactions.
        </p>
        
        <button
          className={`
            flex gap-4 items-center bg-app-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md
          `}
        >
          Book your demo
          <ArrowRightIcon className="w-5 h-5" aria-hidden />
        </button>
      </section>
    </div>
  );
}

export default HeroSection;