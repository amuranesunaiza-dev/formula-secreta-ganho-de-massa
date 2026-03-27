import { CheckCircle2 } from 'lucide-react';

export default function Identification() {
  const points = [
    "Já tentou ganhar massa e falhou",
    "Sente que nada funciona para o seu corpo",
    "Não sabe por onde começar",
    "Quer resultados reais e possíveis"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-purple-950/30 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-violet-900/10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">Se isso soa familiar,</span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                essa fórmula foi feita para você
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-sm rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <p className="text-lg text-purple-100 leading-relaxed font-medium">
                    {point}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/5 group-hover:to-violet-600/5 rounded-3xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-purple-200/80 leading-relaxed max-w-2xl mx-auto">
              Não importa quantas vezes você tentou antes.
              <br />
              <span className="text-white font-semibold">Desta vez será diferente.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
