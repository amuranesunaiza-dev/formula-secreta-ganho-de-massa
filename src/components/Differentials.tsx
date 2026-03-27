import { Zap, CheckCircle2, TrendingUp, Heart, Sparkles } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      icon: Zap,
      title: "Simples",
      description: "Sem complicação, sem termos técnicos difíceis. Tudo explicado de forma clara."
    },
    {
      icon: CheckCircle2,
      title: "Organizado",
      description: "Um passo a passo estruturado para você não se perder no caminho."
    },
    {
      icon: TrendingUp,
      title: "Realista",
      description: "Resultados possíveis e sustentáveis, sem promessas milagrosas."
    },
    {
      icon: Heart,
      title: "Pensado para mulheres",
      description: "Feito especialmente para o corpo e a rotina feminina."
    },
    {
      icon: Sparkles,
      title: "Fácil de seguir",
      description: "Encaixa na sua vida, não importa quão corrida ela seja."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-purple-950/30 to-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">Por que essa fórmula é</span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                diferente de tudo
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-purple-950/40 to-violet-950/40 backdrop-blur-sm rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] h-full">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center border border-purple-400/20 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-purple-200/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/5 group-hover:to-violet-600/5 rounded-3xl transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {differentials.slice(3).map((item, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-purple-950/40 to-violet-950/40 backdrop-blur-sm rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] h-full">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center border border-purple-400/20 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-purple-200/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/5 group-hover:to-violet-600/5 rounded-3xl transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
