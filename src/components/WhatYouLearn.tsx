import { Flame, Sparkles, Activity, ChefHat, Heart, Target } from 'lucide-react';

export default function WhatYouLearn() {
  const topics = [
    {
      icon: Flame,
      title: "Estímulo correto do apetite",
      description: "Aprenda a despertar a fome de forma natural e saudável"
    },
    {
      icon: Sparkles,
      title: "Estratégia de suplementação",
      description: "Quais usar, quando usar e como potencializar resultados"
    },
    {
      icon: Activity,
      title: "Treinos rápidos e eficientes",
      description: "Rotinas práticas que cabem na sua agenda"
    },
    {
      icon: ChefHat,
      title: "Receitas hipercalóricas simples",
      description: "Refeições gostosas e fáceis de preparar"
    },
    {
      icon: Heart,
      title: "Técnicas para barriga definida",
      description: "Vacuum e exercícios para cintura marcada"
    },
    {
      icon: Target,
      title: "Organização da rotina",
      description: "Como encaixar tudo no seu dia a dia sem estresse"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-purple-950/30 to-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">O que você vai</span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                aprender e aplicar
              </span>
            </h2>

            <p className="text-lg text-purple-100/70 max-w-2xl mx-auto leading-relaxed">
              Tudo o que você precisa para transformar seu corpo de forma organizada e definitiva
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-purple-950/40 to-violet-950/40 backdrop-blur-sm rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center border border-purple-400/20 group-hover:scale-110 transition-transform duration-300">
                      <topic.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {topic.title}
                  </h3>

                  <p className="text-purple-200/70 leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/5 group-hover:to-violet-600/5 rounded-3xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
