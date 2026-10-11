import React from 'react';
import { ArrowRight, Heart, BookOpen, Users, CheckCircle } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { ORGANIZATION_DETAILS } from '../data/organizationData';

interface HeroProps {
  onOpenLightbox?: (src: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLightbox }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#FAFAF7]"
      aria-labelledby="hero-heading"
    >
      {/* Subtle tricolour-inspired accent line at top */}
      <div className="absolute top-28 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF9933]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-[#E2E4DC] shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#FF9933] shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-[#17212B] uppercase truncate">
                EDUCATION • EMPOWERMENT • COMMUNITY
              </span>
            </div>

            {/* Main Single H1 Tag */}
            <h1 
              id="hero-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#17212B] tracking-tight leading-[1.15]"
            >
              Educate Today.{' '}
              <span className="relative inline-block">
                <span className="text-[#138808]">Empower</span>
                {/* Subtle hand-drawn underline accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-[#FF9933]"
                  viewBox="0 0 100 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C25 3 70 3 98 8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              Tomorrow.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-xl text-[#525866] max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {ORGANIZATION_DETAILS.missionStatement}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#17212B] hover:bg-[#253240] text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17212B] focus-visible:ring-offset-2"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-4 h-4 text-[#FF9933]" />
              </a>

              <a
                href="#donate-campaign"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F3F4F1] border-2 border-[#138808] text-[#138808] font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808] focus-visible:ring-offset-2 shadow-xs"
              >
                <Heart className="w-4 h-4 text-[#EA580C] fill-current" />
                <span>Donate / Support</span>
              </a>
            </div>

            {/* Key Trust Signals (Authentic facts only) */}
            <div className="pt-6 border-t border-[#E8ECE9] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-md bg-[#138808]/10 text-[#138808] shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17212B]">Est. 26 May 2011</div>
                  <div className="text-[11px] text-[#667085]">Operating in Delhi NCR</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-md bg-[#FF9933]/15 text-[#EA580C] shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17212B]">Registered Society</div>
                  <div className="text-[11px] text-[#667085]">Act XXI of 1860</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-md bg-[#17212B]/10 text-[#17212B] shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17212B]">Sarita Vihar Center</div>
                  <div className="text-[11px] text-[#667085]">Madanpur Khadar, Delhi</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Centerpiece */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <HeroVisual onOpenLightbox={onOpenLightbox} />
          </div>

        </div>
      </div>
    </section>
  );
};

