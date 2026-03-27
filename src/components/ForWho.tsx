import { Check } from 'lucide-react';

export default function ForWho() {
  const points = [
    "Quer ganhar massa corporal de forma saudável",
    "É iniciante e não sabe por onde começar",
    "Busca algo simples e totalmente aplicável",
    "Quer elevar a autoestima e se sentir confiante",
    "Deseja transformação real e definitiva"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-violet-950/20 to-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                Essa fórmula é para você
              </span>
              <br />
              <span className="text-white">que:</span>
            </h2>
          </div>

          <div className="space-y-4">
            {points.map((point, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-r from-purple-950/30 to-violet-950/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:translate-x-2"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center border border-purple-400/20 group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-purple-100 leading-relaxed font-medium">
                    {point}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/5 group-hover:to-violet-600/5 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-xl text-purple-200/80 leading-relaxed max-w-2xl mx-auto">
              Se você se identificou com pelo menos um desses pontos,
              <br />
              <span className="text-white font-semibold">essa é a sua chance de transformação.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
