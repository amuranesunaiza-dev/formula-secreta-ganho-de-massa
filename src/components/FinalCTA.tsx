import { ArrowRight } from 'lucide-react';

type FinalCTAProps = {
  onCTA?: () => void;
};

export default function FinalCTA({ onCTA }: FinalCTAProps) {
  const handleCTA = () => onCTA?.();

  return (
    <section className="py-32 bg-gradient-to-b from-black via-purple-950/50 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.2),transparent_70%)]"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Você pode continuar</span>
              <br />
              <span className="text-purple-300/80">adiando...</span>
            </h2>

            <div className="relative py-4">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Ou pode começar hoje.
              </p>
            </div>
          </div>

          <div className="relative py-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-violet-600/30 to-purple-600/20 blur-2xl"></div>
            <blockquote className="relative text-2xl sm:text-3xl lg:text-4xl font-semibold text-purple-200 italic leading-relaxed">
              "Se você não fizer por ti,
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
                ninguém o fará."
              </span>
            </blockquote>
          </div>

          <div className="space-y-6 pt-6">
            <p className="text-xl text-purple-100/80 leading-relaxed max-w-2xl mx-auto">
              Cada dia que passa é um dia a menos de você vivendo no corpo que merece.
              A transformação começa com uma decisão.
            </p>

            <p className="text-lg text-purple-200/70 leading-relaxed">
              E essa decisão é sua. Só sua.
            </p>
          </div>

          <div className="pt-8">
            <button
              onClick={handleCTA}
              className="group relative px-16 py-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-xl rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                Quero começar agora
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <p className="text-purple-300/60 text-sm mt-6">
              Comece sua transformação agora
            </p>
          </div>

          <div className="pt-12 max-w-2xl mx-auto">
            <p className="text-purple-200/60 leading-relaxed">
              Daqui a alguns meses você vai agradecer por ter tomado essa decisão hoje.
              Não deixe o medo ou a dúvida roubarem a mulher confiante que você pode se tornar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
