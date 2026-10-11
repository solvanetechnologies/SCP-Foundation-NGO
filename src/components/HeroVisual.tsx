import React, { useState } from 'react';
import { BookOpen, Sparkles, Image as ImageIcon, ExternalLink, CheckCircle2 } from 'lucide-react';


interface HeroVisualProps {
  onOpenLightbox?: (src: string, title: string) => void;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState<'book' | 'campaign'>('book');
  const [rotation, setRotation] = useState({ x: 8, y: -6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Gentle, natural tilt within subtle range
    setRotation({
      x: 6 - (y / rect.height) * 8,
      y: -6 + (x / rect.width) * 10,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 8, y: -6 });
  };

  return (
    <div className="w-full max-w-[540px] mx-auto flex flex-col items-center">
      
      {/* Switcher Controls: Switch between Mission Book & Authentic Campaign Showcase */}
      <div className="flex items-center gap-1 p-1 bg-white border border-[#E2E4DC] rounded-xl shadow-xs mb-6 text-xs font-semibold">
        <button
          type="button"
          onClick={() => setActiveTab('book')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
            activeTab === 'book'
              ? 'bg-[#17212B] text-white shadow-xs'
              : 'text-[#525866] hover:text-[#17212B] hover:bg-[#F3F4F1]'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 text-[#FF9933]" />
          <span>Mission Book</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('campaign')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
            activeTab === 'campaign'
              ? 'bg-[#138808] text-white shadow-xs'
              : 'text-[#525866] hover:text-[#17212B] hover:bg-[#F3F4F1]'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5 text-[#FF9933]" />
          <span>Official Campaign</span>
        </button>
      </div>

      {/* TAB 1: ELEGANT, REALISTIC LAY-FLAT 3D OPEN BOOK */}
      {activeTab === 'book' && (
        <div
          className="relative w-full py-4 select-none perspective-1000 transition-all duration-300"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          role="img"
          aria-label="SCP Foundation Open Educational Ledger"
        >
          {/* Subtle warm backdrop glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#138808]/8 via-[#FF9933]/8 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10" />

          {/* Book Wrapper with Realistic Lay-Flat 3D Angle */}
          <div
            className="relative mx-auto w-full max-w-[490px] h-[330px] sm:h-[320px] transition-transform duration-300 ease-out preserve-3d"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            {/* Ambient Shadow under the book */}
            <div className="absolute -bottom-6 left-6 right-6 h-10 bg-black/15 blur-xl rounded-full -z-20" />

            {/* Hardcover Outer Binding Base (snugly hugging the book) */}
            <div 
              className="absolute -inset-1.5 bg-[#17212B] rounded-xl border border-[#2D3F54] shadow-xl -z-10"
              style={{ transform: 'translateZ(-6px)' }}
            >
              {/* Subtle gold foil corner accents on leather cover */}
              <div className="absolute top-2 left-2 w-2.5 sm:w-3 h-2.5 sm:h-3 border-t-2 border-l-2 border-[#FF9933]/50 rounded-tl" />
              <div className="absolute top-2 right-2 w-2.5 sm:w-3 h-2.5 sm:h-3 border-t-2 border-r-2 border-[#FF9933]/50 rounded-tr" />
              <div className="absolute bottom-2 left-2 w-2.5 sm:w-3 h-2.5 sm:h-3 border-b-2 border-l-2 border-[#138808]/50 rounded-bl" />
              <div className="absolute bottom-2 right-2 w-2.5 sm:w-3 h-2.5 sm:h-3 border-b-2 border-r-2 border-[#138808]/50 rounded-br" />
            </div>

            {/* Book Body: Open Pages Laying Naturally Flat (170° angle) */}
            <div className="relative w-full h-full flex rounded-lg overflow-hidden border border-[#D5D0C2] bg-[#FAF8F2] shadow-md">
              
              {/* LEFT PAGE */}
              <div 
                className="w-1/2 h-full p-3.5 sm:p-6 flex flex-col justify-between border-r border-[#E0DBCF]"
                style={{
                  background: 'linear-gradient(to right, #FAF8F2 0%, #FFFFFF 20%, #FAF8F2 90%, #E6E1D2 100%)',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#E8E4DA] pb-1.5 sm:pb-2">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-[#138808] truncate">
                    SCP FOUNDATION
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#8C93A0] shrink-0">EST. 2011</span>
                </div>

                {/* Left Page Content */}
                <div className="my-auto py-1 sm:py-2 space-y-1.5 sm:space-y-2">
                  <div className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 rounded bg-[#138808]/10 text-[#138808] text-[9px] sm:text-[10px] font-bold uppercase tracking-wide">
                    <BookOpen className="w-2.5 sm:w-3 h-2.5 sm:h-3 shrink-0" />
                    <span className="truncate">Education Charter</span>
                  </div>

                  <h3 className="text-sm sm:text-lg font-bold text-[#17212B] leading-tight">
                    Educate Today.
                  </h3>

                  <p className="text-[10px] sm:text-xs text-[#525866] leading-snug sm:leading-relaxed">
                    Spreading literacy, distributing study kits, and providing free coaching for children in underserved Delhi NCR clusters.
                  </p>

                  <div className="pt-0.5 sm:pt-1 text-[9px] sm:text-[10px] text-[#138808] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#138808] shrink-0" />
                    <span className="truncate">Sarita Vihar • Madanpur Khadar</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-[8px] sm:text-[9px] text-[#8C93A0] text-center pt-1.5 sm:pt-2 border-t border-[#E8E4DA] truncate">
                  Chapter I • Foundational Literacy
                </div>
              </div>

              {/* CENTER GUTTER / SPINE SHADOW */}
              <div 
                className="absolute left-1/2 top-0 bottom-0 w-6 sm:w-8 -translate-x-1/2 pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.02) 40%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0.12) 100%)',
                }}
              />

              {/* TRICOLOUR RIBBON BOOKMARKS DRAPED ACROSS THE PAGES */}
              <div 
                className="absolute left-[48%] top-0 w-1 sm:w-1.5 h-full bg-[#FF9933] shadow-md z-20 pointer-events-none"
                style={{ transform: 'rotate(2deg) translateY(-4px)' }}
              />
              <div 
                className="absolute left-[51%] top-0 w-1 sm:w-1.5 h-full bg-[#138808] shadow-md z-20 pointer-events-none"
                style={{ transform: 'rotate(-2deg) translateY(-4px)' }}
              />

              {/* RIGHT PAGE */}
              <div 
                className="w-1/2 h-full p-3.5 sm:p-6 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(to left, #FAF8F2 0%, #FFFFFF 20%, #FAF8F2 90%, #E6E1D2 100%)',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#E8E4DA] pb-1.5 sm:pb-2">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-[#FF9933] truncate">
                    PUBLIC WELFARE
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#8C93A0] shrink-0">VOL. XIV</span>
                </div>

                {/* Right Page Content */}
                <div className="my-auto py-1 sm:py-2 space-y-1.5 sm:space-y-2">
                  <div className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 rounded bg-[#FF9933]/15 text-[#EA580C] text-[9px] sm:text-[10px] font-bold uppercase tracking-wide">
                    <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 shrink-0" />
                    <span className="truncate">Women &amp; Skills</span>
                  </div>

                  <h3 className="text-sm sm:text-lg font-bold text-[#17212B] leading-tight">
                    Empower Tomorrow.
                  </h3>

                  <p className="text-[10px] sm:text-xs text-[#525866] leading-snug sm:leading-relaxed">
                    Equipping girls and mothers with vocational tailoring, computer proficiency, and legal awareness for self-reliance.
                  </p>

                  <div className="pt-0.5 sm:pt-1 text-[9px] sm:text-[10px] text-[#EA580C] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] shrink-0" />
                    <span className="truncate">Vocational Center</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-[8px] sm:text-[9px] text-[#8C93A0] text-center pt-1.5 sm:pt-2 border-t border-[#E8E4DA] truncate">
                  Chapter II • Women's Self-Reliance
                </div>
              </div>

            </div>

            {/* Simulated Stacked Pages Base Underneath */}
            <div className="absolute -bottom-2 left-3 right-3 h-2 bg-[#EDE9DC] border border-[#DDD8C9] rounded-b-md -z-10 shadow-xs" />
            <div className="absolute -bottom-3.5 left-6 right-6 h-1.5 bg-[#E2DDCB] border border-[#D2CCBA] rounded-b-md -z-10 shadow-xs" />
          </div>

          {/* Interactive Cue */}
          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-white/90 border border-[#E2E4DC] text-[#525866] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#138808] animate-pulse" />
              Symbol of Knowledge &amp; Opportunity (Interactive Tilt)
            </span>
          </div>
        </div>
      )}

      {/* TAB 2: AUTHENTIC CAMPAIGN SHOWCASE */}
      {activeTab === 'campaign' && (
        <div className="w-full relative transition-all duration-300">
          <div 
            className="relative mx-auto w-full max-w-[380px] bg-white rounded-2xl p-3 border border-[#E2E4DC] shadow-xl group cursor-pointer"
            onClick={() => onOpenLightbox?.('/assets/donate-education-poster.png', 'Education Awareness Campaign Poster')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpenLightbox?.('/assets/donate-education-poster.png', 'Education Awareness Campaign Poster')}
            aria-label="View authentic Education Awareness Campaign poster"
          >
            {/* Top Verified Header */}
            <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-semibold text-[#17212B]">
              <div className="flex items-center gap-1.5 text-[#138808]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Campaign Publication</span>
              </div>
              <span className="text-[#8C93A0] font-mono text-[10px]">SARITA VIHAR</span>
            </div>

            {/* Poster Frame */}
            <div className="relative rounded-xl overflow-hidden border border-[#E2E4DC]">
              <img
                src="/assets/donate-education-poster.png"
                alt="Authentic Education Awareness Campaign poster issued by SCP Foundation NGO"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-[2px]">
                <ExternalLink className="w-4 h-4" />
                <span>Enlarge Full Campaign</span>
              </div>
            </div>

            <div className="pt-3 px-1 text-center">
              <p className="text-xs font-bold text-[#17212B]">
                Education Awareness Campaign
              </p>
              <p className="text-[11px] text-[#525866] mt-0.5">
                “शिक्षा से सशक्तिकरण, शिक्षा से उज्ज्वल भविष्य”
              </p>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-xs text-[#525866] font-mono">
              Published directly on SCP Foundation official channels
            </span>
          </div>
        </div>
      )}

    </div>
  );
};
