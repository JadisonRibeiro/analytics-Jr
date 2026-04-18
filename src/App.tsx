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
import { DataMarqueeSection } from './sections/DataMarqueeSection';
import { BannerSection } from './sections/BannerSection';
import { PurposeSection } from './sections/PurposeSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { PricingSection } from './sections/PricingSection';
import { FaqSection } from './sections/FaqSection';
import { FinalCtaSection } from './sections/CtaSection';
import { VerseSection } from './sections/VerseSection';
import { Footer } from './sections/Footer';

const OUTCOMES_WORDS_A = [
  'Decisões rápidas',
  'Receita previsível',
  'Visão 360°',
  'Menos retrabalho',
  'Foco no que importa',
];
const OUTCOMES_WORDS_B = [
  'Time alinhado',
  'Metas claras',
  'Crescimento',
  'Dados confiáveis',
  'Resultado real',
];

const TECH_WORDS_A = [
  'Power BI',
  'DAX',
  'Power Query',
  'Modelagem',
  'ETL',
  'Star Schema',
];
const TECH_WORDS_B = [
  'KPIs',
  'Dashboards',
  'Data Storytelling',
  'Automação',
  'BI',
  'Analytics',
];

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
          <DataMarqueeSection wordsA={OUTCOMES_WORDS_A} wordsB={OUTCOMES_WORDS_B} />
          <ServicesSection />
          <VisionSection />
          <DashboardsSection />
          <DataMarqueeSection wordsA={TECH_WORDS_A} wordsB={TECH_WORDS_B} />
          <SoftDivider label="Propósito" />
          <PurposeSection />
          <SoftDivider label="Processo" />
          <HowItWorksSection />
          <SoftDivider label="Clientes" />
          <TestimonialsSection />
          <PricingSection />
          <FaqSection />
          <FinalCtaSection />
          <VerseSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
