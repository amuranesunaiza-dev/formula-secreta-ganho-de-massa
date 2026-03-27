import { useMemo, useState } from 'react';
import { ArrowLeft, Copy, CheckCircle2, Upload, MessageCircle } from 'lucide-react';
import checkoutCover from '../assets/checkout-cover.png?url';

type CheckoutProps = {
  onBack: () => void;
  whatsappNumber: string; // formato internacional, ex: 25884xxxxxxx
  productName: string;
  priceLabel: string; // ex: "1.990 MZN"
  emolaNumberLabel: string; // ex: "84 000 0000"
  emolaAccountName: string; // ex: "NOME DO BENEFICIÁRIO"
};

function onlyDigits(value: string) {
  return value.replace(/\D/g, '');
}

function buildWaLink(phoneDigits: string, text: string) {
  const phone = onlyDigits(phoneDigits);
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${encoded}`;
}

async function copyToClipboard(text: string) {
  await navigator.clipboard.writeText(text);
}

export default function Checkout({
  onBack,
  whatsappNumber,
  productName,
  priceLabel,
  emolaNumberLabel,
  emolaAccountName,
}: CheckoutProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const waText = useMemo(() => {
    const lines = [
      `Olá! Quero confirmar o pagamento do produto: ${productName}`,
      '',
      `Nome: ${name || '-'}`,
      `Telefone: ${phone || '-'}`,
      `Email: ${email || '-'}`,
      `Valor: ${priceLabel}`,
      `ID/Referência eMola: ${transactionId || '-'}`,
      '',
      'Vou enviar o comprovativo em anexo nesta conversa.',
    ];
    return lines.join('\n');
  }, [email, name, phone, priceLabel, productName, transactionId]);

  const waLink = useMemo(() => buildWaLink(whatsappNumber, waText), [whatsappNumber, waText]);

  return (
    <div className="min-h-screen bg-black">
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur border-b border-purple-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
          <div className="text-right">
            <p className="text-sm text-purple-200/70">Checkout</p>
            <p className="text-white font-semibold">{productName}</p>
          </div>
        </div>
      </div>

      <section className="py-12 sm:py-16 bg-gradient-to-b from-black via-purple-950/30 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden border border-purple-500/20 bg-black/30">
                <img
                  src={checkoutCover}
                  alt="Capa da fórmula"
                  className="w-full h-[260px] sm:h-[320px] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-950/50 to-violet-950/50 border border-purple-500/20">
                <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Finalize sua inscrição
                </h1>
                <p className="text-purple-100/70 mt-3 leading-relaxed">
                  Pagamento via <span className="text-purple-200 font-semibold">eMola</span>. Após pagar,
                  clique em <span className="text-white font-semibold">“Enviar comprovativo”</span> para abrir o WhatsApp.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-black/30 border border-purple-500/20">
                    <p className="text-purple-200/70 text-xs uppercase tracking-wide">Produto</p>
                    <p className="text-white font-semibold mt-1">{productName}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-black/30 border border-purple-500/20">
                    <p className="text-purple-200/70 text-xs uppercase tracking-wide">Valor</p>
                    <p className="text-white font-semibold mt-1">{priceLabel}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-950/40 to-violet-950/40 border border-purple-500/20 space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-white">Dados para pagamento eMola</h2>
                    <p className="text-purple-100/70 text-sm mt-1">Copie e cole no app eMola.</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="p-5 rounded-2xl bg-black/30 border border-purple-500/20 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-purple-200/70 text-xs uppercase tracking-wide">Número eMola</p>
                      <p className="text-white font-semibold mt-1 break-words">{emolaNumberLabel}</p>
                    </div>
                    <button
                      onClick={async () => {
                        await copyToClipboard(emolaNumberLabel);
                        setCopied('emola');
                        setTimeout(() => setCopied(null), 1200);
                      }}
                      className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
                      type="button"
                    >
                      {copied === 'emola' ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copiar
                    </button>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/30 border border-purple-500/20 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-purple-200/70 text-xs uppercase tracking-wide">Beneficiário</p>
                      <p className="text-white font-semibold mt-1 break-words">{emolaAccountName}</p>
                    </div>
                    <button
                      onClick={async () => {
                        await copyToClipboard(emolaAccountName);
                        setCopied('name');
                        setTimeout(() => setCopied(null), 1200);
                      }}
                      className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
                      type="button"
                    >
                      {copied === 'name' ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copiar
                    </button>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/30 border border-purple-500/20 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-purple-200/70 text-xs uppercase tracking-wide">Valor</p>
                      <p className="text-white font-semibold mt-1 break-words">{priceLabel}</p>
                    </div>
                    <button
                      onClick={async () => {
                        await copyToClipboard(priceLabel);
                        setCopied('price');
                        setTimeout(() => setCopied(null), 1200);
                      }}
                      className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
                      type="button"
                    >
                      {copied === 'price' ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copiar
                    </button>
                  </div>
                </div>

                <div className="pt-2 text-purple-100/70 text-sm leading-relaxed">
                  <p className="font-semibold text-purple-200">Depois do pagamento:</p>
                  <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li>Guarde o comprovativo (print ou PDF).</li>
                    <li>Preencha seus dados abaixo (opcional, mas ajuda na validação).</li>
                    <li>Clique em “Enviar comprovativo” para abrir o WhatsApp e anexar o comprovativo.</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-950/40 to-violet-950/40 border border-purple-500/20">
                <h2 className="text-xl font-bold text-white">Seus dados</h2>
                <p className="text-purple-100/70 text-sm mt-1">
                  Use os mesmos dados que você usou no pagamento (se possível).
                </p>

                <div className="mt-6 grid gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm text-purple-200/80">Nome completo</span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-purple-500/20 text-white placeholder:text-purple-200/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="Seu nome"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm text-purple-200/80">Telefone</span>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-purple-500/20 text-white placeholder:text-purple-200/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="Ex: +258 84 123 4567"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm text-purple-200/80">Email (opcional)</span>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-purple-500/20 text-white placeholder:text-purple-200/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="voce@email.com"
                      type="email"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm text-purple-200/80">ID/Referência da transação eMola (opcional)</span>
                    <input
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-purple-500/20 text-white placeholder:text-purple-200/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="Ex: 123456789"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm text-purple-200/80">Comprovativo (para você anexar no WhatsApp)</span>
                    <div className="flex items-center gap-3">
                      <input
                        onChange={(e) => setReceiptFile(e.target.files?.[0] ?? null)}
                        className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-purple-500/20 text-purple-100 file:mr-4 file:rounded-xl file:border-0 file:bg-purple-600 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-purple-500"
                        type="file"
                        accept="image/*,application/pdf"
                      />
                    </div>
                    {receiptFile && (
                      <p className="text-xs text-purple-200/70">
                        Selecionado: <span className="text-purple-200 font-semibold">{receiptFile.name}</span>
                      </p>
                    )}
                  </label>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-[1.01] transition-all duration-300"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Enviar comprovativo no WhatsApp
                  </a>

                  <div className="p-4 rounded-2xl bg-black/30 border border-purple-500/20 text-sm text-purple-100/70 leading-relaxed">
                    <p className="font-semibold text-purple-200 inline-flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      Importante
                    </p>
                    <p className="mt-1">
                      O WhatsApp não permite anexar o arquivo automaticamente pelo link. Ao abrir a conversa,
                      anexe o comprovativo manualmente (print/PDF).
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-950/30 to-violet-950/30 border border-purple-500/20">
                <h3 className="text-lg font-bold text-white">Dúvidas?</h3>
                <p className="text-purple-100/70 mt-2 leading-relaxed">
                  Clique em “Enviar comprovativo” e escreva sua dúvida no WhatsApp — eu respondo por lá.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

