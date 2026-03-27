import { useState } from 'react';
import { Star, MessageCircle, User, ImageIcon } from 'lucide-react';
// Imagens de depoimentos (coloque em src/assets/testimonials/ e importe aqui)
import print1 from '../assets/testimonials/print-1.jpg.jpeg?url';
import print2 from '../assets/testimonials/print-2.jpg.jpeg?url';
import print3 from '../assets/testimonials/print-3.jpg.jpeg?url';
import print4 from '../assets/testimonials/print-4.jpg.jpeg?url';

const TESTIMONIAL_PRINTS: string[] = [print1, print2, print3, print4];

function TestimonialPrint({ src, index }: { src: string; index: number }) {
  const [erro, setErro] = useState(false);
  return (
    <div className="group relative flex justify-center items-start bg-gradient-to-br from-purple-950/50 to-violet-950/50 rounded-2xl border border-purple-500/20 overflow-hidden hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] min-h-[200px]">
      {!erro && (
        <img
          src={src}
          alt={`Depoimento ${index + 1}`}
          className="w-full max-w-[280px] h-auto max-h-[420px] object-contain rounded-2xl z-10 block"
          onError={() => setErro(true)}
        />
      )}
      {erro && (
        <div className="absolute inset-0 flex items-center justify-center bg-purple-950/80 rounded-2xl z-10">
          <div className="text-center p-4">
            <ImageIcon className="w-12 h-12 text-purple-400/60 mx-auto mb-2" />
            <p className="text-purple-200/60 text-sm">print-{index + 1}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mariana Silva",
      text: "Finalmente consegui ganhar massa! Segui tudo direitinho e em 2 meses já vi diferença no corpo e na autoestima.",
      rating: 5
    },
    {
      name: "Júlia Santos",
      text: "Eu sempre fui muito magra e achava que nunca ia conseguir. Essa fórmula mudou tudo pra mim!",
      rating: 5
    },
    {
      name: "Carolina Oliveira",
      text: "Simples, organizado e funciona! Não precisa de academia cara nem dieta impossível.",
      rating: 5
    },
    {
      name: "Beatriz Lima",
      text: "Me sinto outra pessoa! Ganhei massa, defini a cintura e finalmente me sinto confiante.",
      rating: 5
    },
    {
      name: "Amanda Costa",
      text: "Melhor investimento que fiz em mim! Resultados reais e uma transformação que eu nunca imaginei.",
      rating: 5
    },
    {
      name: "Fernanda Alves",
      text: "Super recomendo! Funciona mesmo e é fácil de seguir, mesmo pra quem nunca treinou.",
      rating: 5
    }
  ];

  const messages = [
    { text: "Obrigada! Estou amando os resultados 💜", time: "14:32" },
    { text: "Já ganhei 3kg em 1 mês!", time: "16:45" },
    { text: "Nunca pensei que seria tão simples", time: "09:12" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-purple-950/50 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                Resultados de quem
              </span>
              <br />
              <span className="text-white">já começou</span>
            </h2>

            <p className="text-lg text-purple-100/70 max-w-2xl mx-auto leading-relaxed">
              Veja o que mulheres como você estão conquistando
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-purple-950/40 to-violet-950/40 backdrop-blur-sm rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center border border-purple-400/20">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-purple-400 text-purple-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-purple-100/80 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/5 group-hover:to-violet-600/5 rounded-3xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-full">
                <MessageCircle className="w-4 h-4 text-purple-300" />
                <span className="text-purple-200 text-sm font-medium">Mensagens Recebidas</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-to-br from-purple-950/60 to-violet-950/60 backdrop-blur-sm rounded-2xl border border-purple-500/20"
                >
                  <div className="space-y-2">
                    <p className="text-purple-100/90 leading-relaxed">{message.text}</p>
                    <p className="text-purple-400/60 text-xs text-right">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prints de depoimentos / feedbacks reais */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-full mb-6">
                <ImageIcon className="w-4 h-4 text-purple-300" />
                <span className="text-purple-200 text-sm font-medium">Depoimentos reais</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Prints de quem já está transformando
              </h3>
              <p className="text-purple-100/70 mt-2 max-w-xl mx-auto">
                Feedback real de alunas — WhatsApp, Instagram e avaliações
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {TESTIMONIAL_PRINTS.map((src, index) => (
                <TestimonialPrint key={index} src={src} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
