// ...existing code...
import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const Outcomes: React.FC = () => {
  return (
    // section agrandie + background dégradé
    <section className="py-16 md:py-28 min-h-[60vh] bg-hero-noir">
      
        <div className="max-w-7xl mx-auto px-6 text-center text-white bg-gradient-to-b from-hero-noir via-hero-noir to-hero-sombre rounded-lg p-10 md:p-16px">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Drive Better Customer Outcomes with <br />JFT AI Chatbot
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
            Experience the future of customer support with a demo or contact us to discuss your specific requirements.
            </p>

            {/* button centré dans un conteneur sombre */}
            <div className="mt-10 flex justify-center">
            <div className="p-6 rounded-lg">
                <button
                type="button"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-app-blue to-hero-sombre shadow-md hover:brightness-105 transition"
                aria-label="Speak to our expert team"
                >
                <span>Speak to our expert team</span>
                <ArrowRightIcon className="w-5 h-5" aria-hidden />
                </button>
            </div>
            </div>
        </div>
     
    </section>
  );
};

export default Outcomes;