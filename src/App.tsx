import { useEffect, useState } from 'react';
import { Header } from './components/layout/Header';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { SoftDivider } from './components/SoftDivider';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { ServicesSection } from './sections/ServicesSection';
import { VisionSection } from './sections/VisionSection';
import { DashboardsSection } from './sections/DashboardsSection';
import { BannerSection } from './sections/BannerSection';
import { PurposeSection } from './sections/PurposeSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { PricingSection } from './sections/PricingSection';
import { FaqSection } from './sections/FaqSection';
import { FinalCtaSection } from './sections/CtaSection';
import { Footer } from './sections/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = loaded ? '' : 'hidden';
  }, [loaded]);

  return (
    <>
      <CustomCursor />
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div style={{ visibility: loaded ? 'visible' : 'hidden' }}>
        <Header />
        <main className="relative">
          <HeroSection />
          <BannerSection />
          <ProblemSection />
          <ServicesSection />
          <VisionSection />
          <DashboardsSection />
          <SoftDivider label="Propósito" />
          <PurposeSection />
          <SoftDivider label="Processo" />
          <HowItWorksSection />
          <SoftDivider label="Clientes" />
          <TestimonialsSection />
          <PricingSection />
          <FaqSection />
          <FinalCtaSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
