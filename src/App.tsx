import { useCallback, useState } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Identification from './components/Identification';
import Solution from './components/Solution';
import WhatYouLearn from './components/WhatYouLearn';
import Testimonials from './components/Testimonials';
import ForWho from './components/ForWho';
import Differentials from './components/Differentials';
import FinalCTA from './components/FinalCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCheckout = useCallback(() => {
    setIsCheckoutOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const closeCheckout = useCallback(() => {
    setIsCheckoutOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (isCheckoutOpen) {
    return (
      <Checkout
        onBack={closeCheckout}
        whatsappNumber="+258 83 474 5655"
        productName="Fórmula de Transformação Corporal"
        priceLabel="249 MZN (de 599 MZN) — promoção limitada para as 10 primeiras alunas"
        emolaNumberLabel="866678519"
        emolaAccountName="REZIA ISAURA MACHELE"
      />
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Hero onCTA={openCheckout} />
      <Problem />
      <Identification />
      <Solution onCTA={openCheckout} />
      <WhatYouLearn />
      <Testimonials />
      <ForWho />
      <Differentials />
      <FinalCTA onCTA={openCheckout} />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
