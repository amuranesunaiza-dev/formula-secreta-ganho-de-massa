import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

// Data e hora em que a promoção relâmpago termina (altere aqui)
// Formato: ano, mês (0-11), dia, hora, minuto
const PROMO_END = new Date(2026, 1, 11, 23, 59); // 11 de fevereiro de 2026, 23:59

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

function getTimeLeft(end: Date) {
  const now = new Date();
  const diff = Math.max(0, end.getTime() - now.getTime());
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { hours, minutes, seconds, finished: diff === 0 };
}

export default function FlashSaleCountdown() {
  return <FlashSaleCountdownBanner />;
}

type FlashSaleCountdownProps = {
  onCTA?: () => void;
};

export function FlashSaleCountdownBanner({ onCTA }: FlashSaleCountdownProps) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(PROMO_END));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(PROMO_END));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCTA = () => onCTA?.();

  if (timeLeft.finished) {
    return (
      <section className="py-8 bg-gradient-to-r from-amber-900/40 via-orange-900/30 to-amber-900/40 border-y border-amber-500/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-200/90 font-semibold">Promoção relâmpago encerrada.</p>
          <p className="text-amber-200/60 text-sm mt-1">Fique de olho na próxima!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gradient-to-r from-amber-950/60 via-orange-950/50 to-amber-950/60 border-y border-amber-500/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYmkyNDIiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDM0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 rounded-xl border border-amber-400/30">
              <Zap className="w-6 h-6 text-amber-400" />
            </div>
            <div className="text-left sm:text-center">
              <p className="text-amber-200 font-bold text-lg uppercase tracking-wide">
                Promoção relâmpago
              </p>
              <p className="text-amber-200/70 text-sm">Oferta por tempo limitado</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex flex-col items-center min-w-[56px] sm:min-w-[64px]">
              <span className="text-2xl sm:text-3xl font-bold text-white bg-black/40 rounded-lg px-2 py-2 sm:px-3 sm:py-2 border border-amber-500/30 tabular-nums">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span className="text-amber-200/80 text-xs font-medium mt-1 uppercase">horas</span>
            </div>
            <span className="text-amber-400 text-xl font-bold">:</span>
            <div className="flex flex-col items-center min-w-[56px] sm:min-w-[64px]">
              <span className="text-2xl sm:text-3xl font-bold text-white bg-black/40 rounded-lg px-2 py-2 sm:px-3 sm:py-2 border border-amber-500/30 tabular-nums">
                {pad(timeLeft.minutes)}
              </span>
              <span className="text-amber-200/80 text-xs font-medium mt-1 uppercase">min</span>
            </div>
            <span className="text-amber-400 text-xl font-bold">:</span>
            <div className="flex flex-col items-center min-w-[56px] sm:min-w-[64px]">
              <span className="text-2xl sm:text-3xl font-bold text-white bg-black/40 rounded-lg px-2 py-2 sm:px-3 sm:py-2 border border-amber-500/30 tabular-nums animate-pulse">
                {pad(timeLeft.seconds)}
              </span>
              <span className="text-amber-200/80 text-xs font-medium mt-1 uppercase">seg</span>
            </div>
          </div>

          <button
            onClick={handleCTA}
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-full text-sm uppercase tracking-wide hover:from-amber-400 hover:to-orange-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/25"
          >
            Garantir agora
          </button>
        </div>
      </div>
    </section>
  );
}
