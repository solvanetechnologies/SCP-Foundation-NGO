import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { ORGANIZATION_DETAILS } from '../data/organizationData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Programs', href: '#programs' },
    { label: 'Donate via UPI', href: '#donate-campaign' },
    { label: 'Our Impact', href: '#impact' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Get Involved', href: '#get-involved' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E4DC]'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      {/* Top Banner with confirmed helpline and Delhi location */}
      <div className="bg-[#17212B] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-white/90">
              <span className="w-2 h-2 rounded-full bg-[#138808]" />
              Sarita Vihar, New Delhi
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-white/80">
              Regd. Under Societies Registration Act XXI of 1860
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={ORGANIZATION_DETAILS.phoneHref}
              className="inline-flex items-center gap-1.5 font-medium text-white hover:text-[#FF9933] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9933] rounded px-1"
              aria-label="Call SCP Foundation NGO helpline at +91 95555 37474"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF9933]" />
              <span>+91 95555 37474</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Authentic Logo Link */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808] rounded-md p-1 min-w-0"
            aria-label="SCP Foundation NGO Homepage"
          >
            <div className="relative h-10 sm:h-12 w-auto shrink-0 flex items-center bg-white rounded p-0.5 border border-[#E2E4DC]">
              <img
                src="/scp-foundation-logo.jpg"
                alt="SCP Foundation NGO official logo"
                className="h-9 sm:h-11 w-auto object-contain max-w-[120px] sm:max-w-[180px]"
                loading="eager"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-lg font-bold tracking-tight text-[#17212B] leading-tight truncate">
                SCP Foundation
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#138808] tracking-wider uppercase truncate">
                NGO • New Delhi
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#17212B] hover:text-[#138808] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808] rounded px-1 py-0.5 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-[#138808] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#donate-campaign"
              className="inline-flex items-center gap-2 bg-[#138808] hover:bg-[#0E6606] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 hover:shadow hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808] focus-visible:ring-offset-2"
            >
              <Heart className="w-4 h-4 text-[#FF9933] fill-current" />
              <span>Donate via UPI</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#donate-campaign"
              className="inline-flex items-center justify-center p-2 rounded-lg bg-[#138808] text-white text-xs font-semibold px-3"
            >
              Donate
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-[#17212B] hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="relative z-50 lg:hidden bg-white border-b border-[#E2E4DC] px-4 pt-2 pb-6 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="grid gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center min-h-[44px] px-3.5 py-3 rounded-xl text-base font-medium text-[#17212B] hover:bg-[#FAFAF7] hover:text-[#138808] active:bg-[#F3F4F1] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E8ECE9] flex flex-col gap-2.5">
            <a
              href="#donate-campaign"
              onClick={handleLinkClick}
              className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#138808] hover:bg-[#0E6606] text-white font-semibold py-3 rounded-xl shadow-sm text-sm"
            >
              <Heart className="w-4 h-4 text-[#FF9933] fill-current" />
              <span>Donate via UPI / Scan QR</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={ORGANIZATION_DETAILS.phoneHref}
                className="min-h-[44px] inline-flex items-center justify-center gap-1.5 border border-[#E2E4DC] bg-white text-[#17212B] font-medium py-2.5 px-2 rounded-xl text-xs hover:bg-[#FAFAF7]"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF9933]" />
                <span>Call Helpline</span>
              </a>

              <a
                href="https://wa.me/919555537474?text=Hello%20SCP%20Foundation%20NGO,%20I%20would%20like%20to%20learn%20more%20about%20your%20community%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-1.5 bg-[#25D366]/15 border border-[#25D366]/30 text-[#0F6A06] font-semibold py-2.5 px-2 rounded-xl text-xs hover:bg-[#25D366]/25"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#138808]" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.769.814 2.791.814 3.179 0 5.766-2.587 5.767-5.766.002-3.18-2.585-5.766-5.766-5.766zm9.969 5.766c-.002 5.519-4.49 9.998-10 9.998-1.748 0-3.376-.454-4.81-1.251l-5.19 1.359 1.385-5.059c-.89-1.488-1.385-3.238-1.385-5.047 0-5.52 4.49-10 10-10 5.51 0 10 4.48 10 10z"/>
                </svg>
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
