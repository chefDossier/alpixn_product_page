// ...existing code...
"use client";

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const faqs = [
  {
    q: 'What is JFT AI Chatbot?',
    a: `JFT AI Chatbot is an AI-driven customer support solution that integrates with your digital platforms to provide real-time, intelligent responses to customer inquiries, enhancing user engagement and satisfaction.`,
  },
  { q: 'How does the chatbot learn and adapt?', a: '' }, // réponse laissée vide
  { q: 'Is JFT AI Chatbot easy to integrate?', a: '' }, // réponse laissée vide
  { q: 'How does JFT AI Chatbot handle sensitive data?', a: '' }, // réponse laissée vide
  { q: 'Can I customize the chat flows?', a: '' }, // réponse laissée vide
  { q: 'What support options are available?', a: '' }, // réponse laissée vide
];

const DevelopperSection: React.FC = () => {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const toggle = (idx: number) => {
    setOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="offerSection py-12">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
          FAQs about JFT AI Chatbot
        </h2>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = !!open[i];
            const hasAnswer = Boolean(f.a && f.a.trim().length > 0);
            return (
              <div
                key={f.q}
                className="border border-white/10 rounded-lg bg-transparent overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                >
                  <span className="font-medium">{f.q}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    aria-hidden
                  />
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`px-4 pb-4 transition-[max-height,opacity] duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    maxHeight: isOpen ? '400px' : '0px',
                    overflow: 'hidden',
                  }}
                >
                  {hasAnswer ? (
                    <p className="text-sm text-white/90 mt-2">{f.a}</p>
                  ) : (
                    // gestion intelligente : affiche un texte discret si pas de réponse fournie
                    <p className="text-sm text-white/60 mt-2 italic">No answer provided yet.</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DevelopperSection;
// ...existing