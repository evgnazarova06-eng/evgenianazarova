import { useState } from 'react';
import { AboutAndContactSection } from '@/components/sections/AboutAndContactSection';
import { HeroIntroductionSection } from '@/components/sections/HeroIntroductionSection';
import { PortfolioCasesSection } from '@/components/sections/PortfolioCasesSection';
import { PortfolioCaseDetail } from '@/components/sections/PortfolioCaseDetail';
import { ProjectInquirySection } from '@/components/sections/ProjectInquirySection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { SiteFooterSection } from '@/components/sections/SiteFooterSection';
import { SiteHeaderSection } from '@/components/sections/SiteHeaderSection';
import { WorkProcessSection } from '@/components/sections/WorkProcessSection';
import { getPortfolioCaseBySlug } from '@/data/portfolio';

function App() {
  const [activeCaseSlug, setActiveCaseSlug] = useState<string | null>(null);
  const activeCase = activeCaseSlug
    ? getPortfolioCaseBySlug(activeCaseSlug)
    : null;

  /** Закрыть кейс (если открыт) и проскроллить к секции */
  const handleNavigate = (href: string) => {
    const scrollToTarget = () => {
      if (href === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (activeCaseSlug) {
      // Сначала возвращаемся на лендинг, потом скроллим
      setActiveCaseSlug(null);
      // Ждём следующий кадр, чтобы секции успели смонтироваться
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToTarget);
      });
    } else {
      scrollToTarget();
    }
  };

  if (activeCase) {
    return (
      <main className="relative flex w-full flex-col items-stretch overflow-x-hidden">
        <SiteHeaderSection onNavigate={handleNavigate} />
        <PortfolioCaseDetail
          caseItem={activeCase}
          onBack={() => {
            setActiveCaseSlug(null);
            requestAnimationFrame(() => {
              document.getElementById('portfolio')?.scrollIntoView({
                behavior: 'smooth',
              });
            });
          }}
        />
        <SiteFooterSection />
      </main>
    );
  }

  return (
    <main className="relative flex w-full flex-col items-stretch overflow-x-hidden">
      <SiteHeaderSection onNavigate={handleNavigate} />
      <HeroIntroductionSection />
      <AboutAndContactSection />
      <WorkProcessSection />
      <ServicesSection />
      <PortfolioCasesSection onOpenCase={setActiveCaseSlug} />
      <ProjectInquirySection />
      <SiteFooterSection />
    </main>
  );
}

export default App;