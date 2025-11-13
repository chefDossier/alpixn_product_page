// ...existing code...
import React from 'react';
import {
  BuildingOffice2Icon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const cards = [
  {
    title: 'Organizations',
    text: 'Streamline operations and enhance customer satisfaction with AI-powered, real-time support for seamless interactions.',
    icon: BuildingOffice2Icon,
  },
  {
    title: 'Educational Institutions',
    text: 'Provide instant academic and administrative support 24/7, improving student engagement and leveling user satisfaction.',
    icon: AcademicCapIcon,
  },
  {
    title: 'Customer Support Teams',
    text: 'Automate routine queries, reduce response times, and focus on more complex issues with AI-driven assistance.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'HR & Recruitment Teams',
    text: 'Simplify candidate interactions, automate query responses, and ensure faster, more efficient hiring processes.',
    icon: UsersIcon,
  },
];

const OfferSectionEnd: React.FC = () => {
  return (
    <section className="offerSection py-12">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            Transform Your Customer Engagement with JFT AI Chatbot
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            Trusted by businesses across industries, JFT AI Chatbot is more than just an automated response tool. It’s a strategic partner in elevating customer satisfaction, reducing operational costs, and driving growth through intelligent customer interactions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="cardGradient w-full lg:w-1/4 border border-white/10 rounded-lg bg-transparent p-6 relative overflow-hidden"
              >
                {/* Texte (au-dessus) */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{c.text}</p>
                </div>

                {/* Icone en background (absolute, plus grande, opaquée) */}
                <div className="pointer-events-none absolute right-4 bottom-4 z-0">
                  {/* bleu clair transparent */}
                  <Icon className="w-24 h-24 text-blue-400/30" aria-hidden />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferSectionEnd;