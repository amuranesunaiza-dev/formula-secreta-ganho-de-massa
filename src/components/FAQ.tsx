import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Em quanto tempo posso ver resultados?",
      answer: "Os primeiros resultados começam a aparecer nas primeiras semanas, mas a transformação visível acontece geralmente entre 1 a 3 meses de aplicação consistente da fórmula. Cada corpo é único, mas com dedicação os resultados vêm."
    },
    {
      question: "Serve para iniciantes?",
      answer: "Sim! A fórmula foi criada especialmente pensando em mulheres iniciantes que nunca treinaram ou nunca conseguiram ganhar massa. Tudo é explicado de forma simples e aplicável, mesmo para quem está começando do zero."
    },
    {
      question: "Preciso treinar pesado?",
      answer: "Não! Os treinos são simples, práticos e podem ser feitos em casa ou na academia. O foco está na consistência e na técnica correta, não em levantar muito peso. É totalmente adaptável ao seu nível."
    },
    {
      question: "Posso adaptar à minha rotina?",
      answer: "Com certeza! A fórmula foi desenvolvida para se encaixar em qualquer rotina, mesmo as mais corridas. Você aprenderá a organizar alimentação e treinos de forma prática e sem estresse."
    },
    {
      question: "Preciso de suplementos caros?",
      answer: "Não necessariamente. A fórmula ensina o uso correto e estratégico de suplementação, mas de forma inteligente e acessível. Você vai saber exatamente o que vale a pena e o que não precisa."
    },
    {
      question: "Funciona para quem tem metabolismo acelerado?",
      answer: "Sim! A fórmula foi pensada justamente para mulheres com metabolismo rápido que têm dificuldade em ganhar peso. Você vai aprender estratégias específicas para contornar esse desafio."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-violet-950/20 to-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">Perguntas</span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                Frequentes
              </span>
            </h2>

            <p className="text-lg text-purple-100/70 leading-relaxed">
              Tire suas dúvidas antes de começar
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-purple-950/40 to-violet-950/40 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-300 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-purple-100/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/5 group-hover:to-violet-600/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
