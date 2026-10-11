import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { CampaignSection } from './components/CampaignSection';
import { ValuesSection } from './components/ValuesSection';
import { ImpactNarrative } from './components/ImpactNarrative';
import { GallerySection } from './components/GallerySection';
import { GeographySection } from './components/GeographySection';
import { GetInvolvedSection } from './components/GetInvolvedSection';
import { OnlinePresenceSection } from './components/OnlinePresenceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { MobileQuickActions } from './components/MobileQuickActions';

export const App: React.FC = () => {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
    title: string;
  }>({
    isOpen: false,
    src: '',
    title: '',
  });

  const handleOpenLightbox = (src: string, title: string) => {
    setLightboxState({
      isOpen: true,
      src,
      title,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#17212B] font-sans antialiased overflow-x-hidden pb-16 sm:pb-0">
      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-[#17212B] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-[#138808]"
      >
        Skip to main content
      </a>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        <Hero onOpenLightbox={handleOpenLightbox} />
        <IntroSection />

        <AboutSection />
        <ProgramsSection onOpenLightbox={handleOpenLightbox} />
        <CampaignSection onOpenLightbox={handleOpenLightbox} />
        <ValuesSection />
        <ImpactNarrative />
        <GallerySection onOpenLightbox={handleOpenLightbox} />
        <GeographySection />
        <GetInvolvedSection />
        <OnlinePresenceSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Dock (Helpline, WhatsApp, Support) */}
      <MobileQuickActions />

      {/* Accessible Full-Resolution Lightbox for Authentic Assets */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        src={lightboxState.src}
        title={lightboxState.title}
        onClose={handleCloseLightbox}
      />
    </div>
  );
};

export default App;
