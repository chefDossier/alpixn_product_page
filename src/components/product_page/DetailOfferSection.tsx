// ...existing code...
import React from 'react';

const B = <button
                className="mt-4 bg-transparent text-white font-medium py-2 px-4 rounded"
                style={{
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderTopColor: 'var(--app-blue)',
                    borderRightColor: '#ffffff',
                    borderBottomColor: '#ffffff',
                    borderLeftColor: '#ffffff',
                    background: 'transparent',
                }}
            >
                View full details
            </button>

const DetailOfferSection: React.FC = () => {
  return (
    <section className="offerSection py-12 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre et paragraphe dans la même div */}
        <div className="text-white mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            Cutting-edge Features that enhance Customer Experience
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            Explore a range of innovative features designed to understand and interact with your customers effectively, ensuring seamless support and enhanced user engagement. With 24/7 automated assistance, secure data handling, and privacy compliance, your customer support is powered by industry-leading AI.
          </p>
        </div>

        {/* Feature 1: image left, text right */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-10">
          <div className="w-full lg:w-1/2">
            <img
              src="/assets/pic/nlu.png"
              alt="Natural Language Understanding"
              className="w-full max-w-md rounded mx-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 text-white">
            <h3 className="text-xl font-semibold">Natural Language Understanding</h3>
            <p className="mt-3">
              Utilize sophisticated NLU to comprehend customer inquiries accurately, delivering relevant and meaningful responses that resonate with user intent.
            </p>
            {B}
          </div>
        </div>

        {/* Feature 2: text left, image right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-10">
          <div className="w-full lg:w-1/2">
            <img
              src="/assets/pic/learning.png"
              alt="Continuous Learning"
              className="w-full max-w-md rounded mx-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 text-white">
            <h3 className="text-xl font-semibold">
              The chatbot evolves and adapts through continuous learning
            </h3>
            <p className="mt-3">
              The chatbot evolves and adapts through continuous learning, improving its interactions over time for more personalized and effective support.
            </p>
            {B}
          </div>
        </div>

        {/* Feature 3: image left, text right */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src="/assets/pic/sentiment.png"
              alt="Sentiment Analysis and Emotional Intelligence"
              className="w-full max-w-md rounded mx-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 text-white">
            <h3 className="text-xl font-semibold">Sentiment Analysis and Emotional Intelligence</h3>
            <p className="mt-3">
              Leverage sentiment analysis to understand customer emotions and respond appropriately, ensuring empathetic and supportive interactions.
            </p>
            {B}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailOfferSection;