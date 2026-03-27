import { Sparkles } from 'lucide-react';
// Imagem do hero: coloque em src/assets/ e importe aqui (ex.: hero-image.jpg ou hero-image.jpg.jfif)
import heroImage from '../assets/hero-image.jpg.jfif?url';
const HERO_IMAGE = heroImage;

type HeroProps = {
  onCTA?: () => void;
};

export default function Hero({ onCTA }: HeroProps) {
  const handleCTA = () => onCTA?.();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-purple-950 to-violet-950">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-full">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span className="text-purple-200 text-sm font-medium">Transformação Corporal Feminina</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-300 via-violet-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                Ganhe Massa Corporal
              </span>
              <br />
              <span className="text-white">De Forma Feminina</span>
              <br />
              <span className="text-white">E Organizada</span>
            </h1>

            <p className="text-lg sm:text-xl text-purple-100/80 leading-relaxed max-w-xl">
              A fórmula completa para mulheres que querem ganhar massa, elevar a autoestima e transformar o corpo sem complicação.
            </p>

            <div className="relative py-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 blur-xl"></div>
              <blockquote className="relative text-2xl sm:text-3xl font-semibold text-center text-purple-200 italic">
                "Se você não fizer por ti,
                <br />
                <span className="text-white">ninguém o fará."</span>
              </blockquote>
            </div>

            <p className="text-purple-100/70 leading-relaxed">
              Você merece se sentir bem no seu corpo. Merece olhar no espelho e se sentir confiante.
              Essa é a sua chance de finalmente conquistar o corpo que você sempre quis.
            </p>

            <button
              onClick={handleCTA}
              className="group relative w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105"
            >
              <span className="relative z-10">Quero começar agora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-violet-600/30 rounded-3xl blur-3xl"></div>
            <div className="relative h-full bg-gradient-to-br from-purple-900/40 to-violet-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/20 flex items-center justify-center overflow-hidden">
              <img
                src={HERO_IMAGE}
                alt="Transformação corporal feminina"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center z-0 hidden">
                <div className="text-center space-y-4">
                  <Sparkles className="w-24 h-24 text-purple-300 mx-auto opacity-50" />
                  <p className="text-purple-200/60 text-sm px-8">Espaço reservado para imagem principal</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
