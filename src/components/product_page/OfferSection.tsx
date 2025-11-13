// ...existing code...
import React from 'react';

const OfferSection: React.FC = () => {
  return (
    <section className="offerSection">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 p-8">
        {/* Titre et paragraphe dans la même div */}
        <div className="flex-1 text-white">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            Empower Your Customer Support with JFT AI Chatbot
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            JFT AI Chatbot, powered by advanced GenAI, seamlessly integrates with your websites and applications to provide immediate, accurate responses to customer queries. Say goodbye to delayed responses and hello to 24/7 personalized support that boosts user satisfaction and captures every opportunity for engagement and conversion.
          </p>
        </div>

        {/* Div contenant l'image, sur la même ligne */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="/assets/pic/jft-chatbot.png"
            alt="Illustration JFT AI Chatbot"
            className="w-full max-w-md rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default OfferSection;