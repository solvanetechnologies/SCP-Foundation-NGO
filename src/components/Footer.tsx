import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { ORGANIZATION_DETAILS } from '../data/organizationData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#17212B] text-white pt-16 pb-12 border-t-4 border-[#138808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3 bg-white p-2 rounded-lg w-fit border border-white/20">
              <img
                src="/scp-foundation-logo.jpg"
                alt="SCP Foundation NGO official logo"
                className="h-10 w-auto object-contain max-w-[160px]"
                loading="lazy"
              />
            </div>
            
            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              {ORGANIZATION_DETAILS.missionStatement}
            </p>

            <div className="text-xs text-[#FF9933] font-semibold italic">
              “{ORGANIZATION_DETAILS.primarySlogan}”
            </div>

            <p className="text-xs text-white/50">
              {ORGANIZATION_DETAILS.disclaimer}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF9933]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Our Programs</a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors">Our Impact</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Activity Gallery</a>
              </li>
              <li>
                <a href="#get-involved" className="hover:text-white transition-colors">Get Involved</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Program Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#138808]">
              Key Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Child Education</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Women’s Empowerment</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Digital Literacy</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Health Awareness</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Community Welfare</a>
              </li>
              <li>
                <a href="#donate-campaign" className="hover:text-white transition-colors">Donate for Education</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Delhi Secretariat
            </h4>
            <div className="space-y-3 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#138808] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  H. No. 1010/121, Madanpur Khadar, Sarita Vihar, New Delhi 110076, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF9933] shrink-0" />
                <a href={ORGANIZATION_DETAILS.phoneHref} className="hover:text-white transition-colors font-semibold">
                  {ORGANIZATION_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/80 shrink-0" />
                <a href={ORGANIZATION_DETAILS.emailHref} className="hover:text-white transition-colors">
                  {ORGANIZATION_DETAILS.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#get-involved"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF9933] hover:text-white transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>{ORGANIZATION_DETAILS.communitySlogan}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Powered By, and Back-to-Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center md:text-left">
          <div>
            &copy; {currentYear} {ORGANIZATION_DETAILS.name}. All rights reserved.
          </div>

          {/* Middle Bottom: Powered and Managed by Solvane Technologies */}
          <div className="text-white/70">
            <span>Powered and Managed by: </span>
            <a
              href="https://solvanetechnologies.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF9933] hover:text-white font-semibold transition-colors underline decoration-[#FF9933]/40 underline-offset-2 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9933] rounded px-0.5"
            >
              Solvane Technologies
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">
              New Delhi, India • Est. 2011
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808] cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
