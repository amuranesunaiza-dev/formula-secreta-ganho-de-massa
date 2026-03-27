import { AlertCircle } from 'lucide-react';

export default function Problem() {
  const problems = [
    "Metabolismo acelerado que parece queimar tudo o que você come",
    "Falta de apetite constante, mesmo sabendo que precisa comer mais",
    "Estratégias erradas que não funcionam para o seu corpo",
    "Treinos sem direção que deixam você perdida e frustrada",
    "Frustração com o próprio corpo que não muda, não importa o que você faça"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-violet-950 via-black to-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-flex p-3 bg-purple-900/30 rounded-2xl border border-purple-500/20">
              <AlertCircle className="w-8 h-8 text-purple-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Por que você come, treina e
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
                mesmo assim não ganha massa?
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-r from-purple-950/50 to-violet-950/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-purple-400 rounded-full group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-all duration-300"></div>
                  <p className="text-lg text-purple-100/80 text-left leading-relaxed">
                    {problem}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xl text-purple-200/70 leading-relaxed pt-6">
            A verdade é que você não está fazendo nada errado.
            <br />
            Você só não tinha a <span className="text-purple-300 font-semibold">fórmula certa</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
