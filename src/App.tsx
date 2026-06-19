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
import { TeamSection } from './sections/TeamSection';
import { DataMarqueeSection } from './sections/DataMarqueeSection';
import { BannerSection } from './sections/BannerSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { PricingSection } from './sections/PricingSection';
import { FaqSection } from './sections/FaqSection';
import { FinalCtaSection } from './sections/CtaSection';
import { VerseSection } from './sections/VerseSection';
import { Footer } from './sections/Footer';
import { useLanguage } from './i18n/LanguageContext';

const OUTCOMES_WORDS = {
  pt: {
    a: ['Decisões rápidas', 'Receita previsível', 'Visão 360°', 'Menos retrabalho', 'Foco no que importa'],
    b: ['Time alinhado', 'Metas claras', 'Crescimento', 'Dados confiáveis', 'Resultado real'],
  },
  en: {
    a: ['Fast decisions', 'Predictable revenue', '360° view', 'Less rework', 'Focus on what matters'],
    b: ['Aligned team', 'Clear goals', 'Growth', 'Reliable data', 'Real results'],
  },
  es: {
    a: ['Decisiones rápidas', 'Ingresos predecibles', 'Visión 360°', 'Menos retrabajo', 'Enfoque en lo importante'],
    b: ['Equipo alineado', 'Metas claras', 'Crecimiento', 'Datos confiables', 'Resultado real'],
  },
};

const TECH_WORDS_A = ['Power BI', 'DAX', 'Power Query', 'Modelagem', 'ETL', 'Star Schema'];
const TECH_WORDS_B = ['KPIs', 'Dashboards', 'Data Storytelling', 'Automação', 'BI', 'Analytics'];

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const { lang, t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = loaded ? '' : 'hidden';
  }, [loaded]);

  const outcomes = OUTCOMES_WORDS[lang];

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
          <DataMarqueeSection wordsA={outcomes.a} wordsB={outcomes.b} />
          <ServicesSection />
          <VisionSection />
          <DashboardsSection />
          <TeamSection />
          <DataMarqueeSection wordsA={TECH_WORDS_A} wordsB={TECH_WORDS_B} />
          <SoftDivider label={t.process.dividerLabel} />
          <HowItWorksSection />
          <SoftDivider label={t.testimonials.dividerLabel} />
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
