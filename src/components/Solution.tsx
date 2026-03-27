import { Utensils, Pill, Dumbbell, Wind, Calendar } from 'lucide-react';

type SolutionProps = {
  onCTA?: () => void;
};

export default function Solution({ onCTA }: SolutionProps) {
  const features = [
    {
      icon: Utensils,
      title: "Estratégia alimentar organizada",
      description: "Planejamento completo e simples de seguir, sem complicação"
    },
    {
      icon: Pill,
      title: "Uso correto de suplementação",
      description: "O que realmente funciona e como usar da forma certa"
    },
    {
      icon: Dumbbell,
      title: "Treinos simples para iniciantes",
      description: "Exercícios eficientes que qualquer pessoa pode fazer"
    },
    {
      icon: Wind,
      title: "Controle da região abdominal",
      description: "Técnicas de Vacuum e Pilates para definição"
    },
    {
      icon: Calendar,
      title: "Organização do corpo",
      description: "Estratégias para os primeiros dias de transformação"
    }
  ];

  const handleCTA = () => onCTA?.();

  return (
    <section className="py-24 bg-gradient-to-b from-black via-violet-950/20 to-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  A Fórmula Completa
                </span>
                <br />
                <span className="text-white">Para Sua Transformação</span>
              </h2>

              <p className="text-lg text-purple-100/80 leading-relaxed">
                Um método passo a passo, pensado especialmente para mulheres que querem ganhar massa de forma saudável, organizada e sem mistério.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-purple-200/70 leading-relaxed">
                Não é sobre treinar pesado todos os dias ou comer o tempo todo. É sobre fazer as coisas certas, no momento certo, do jeito certo.
              </p>

              <p className="text-purple-200/70 leading-relaxed">
                Uma abordagem feminina, realista e totalmente aplicável à sua rotina.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-purple-950/40 to-violet-950/40 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-purple-900/50 rounded-xl border border-purple-500/20 group-hover:bg-purple-800/50 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-purple-300" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-purple-200/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/5 group-hover:to-violet-600/5 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={handleCTA}
            className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105"
          >
            <span className="relative z-10">Quero aplicar essa fórmula</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
