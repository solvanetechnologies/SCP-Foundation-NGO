import React, { useState } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

export const Book3D: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 12, y: -18 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Controlled tilt angles within safe bounds
    const rotX = 14 - (y / rect.height) * 16;
    const rotY = -16 + (x / rect.width) * 20;
    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 12, y: -18 });
  };

  return (
    <div 
      className="relative w-full max-w-[460px] mx-auto py-10 px-4 select-none perspective-1200"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      aria-label="Interactive 3D Education Book Metaphor"
      role="img"
    >
      {/* Subtle Background Glow Accent (restrained brand colors: saffron & green) */}
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-[#138808]/5 via-[#FF9933]/5 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10" 
      />

      {/* 3D Book Container */}
      <div
        className="relative mx-auto w-[320px] sm:w-[380px] h-[260px] sm:h-[300px] transition-transform duration-300 ease-out preserve-3d cursor-grab active:cursor-grabbing"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(2deg)`,
        }}
      >
        {/* Soft shadow under the book */}
        <div 
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-black/15 blur-xl rounded-full"
          style={{ transform: 'rotateX(90deg) translateZ(-40px)' }}
        />

        {/* Book Spine Center Marker */}
        <div 
          className="absolute left-1/2 top-0 bottom-0 w-3 -translate-x-1/2 bg-[#17212B] rounded-sm z-20 shadow-md"
          style={{ transform: 'translateZ(18px)' }}
        />

        {/* Tricolour-Inspired Ribbon Bookmarks flowing out of spine */}
        <div 
          className="absolute left-1/2 top-[-10px] w-1.5 h-20 -translate-x-1 bg-[#FF9933] shadow-sm rounded-b origin-top z-30"
          style={{ transform: 'translateZ(24px) rotateZ(-12deg)' }}
        />
        <div 
          className="absolute left-1/2 top-[-10px] w-1.5 h-24 translate-x-0.5 bg-[#138808] shadow-sm rounded-b origin-top z-30"
          style={{ transform: 'translateZ(24px) rotateZ(8deg)' }}
        />

        {/* LEFT PAGE WING */}
        <div
          className="absolute left-0 top-0 w-1/2 h-full bg-[#FCFBF7] border border-[#E3E1D8] rounded-l-lg p-5 flex flex-col justify-between shadow-[-10px_10px_25px_rgba(0,0,0,0.06)] origin-right"
          style={{
            transform: 'rotateY(-24deg) translateZ(8px)',
            background: 'linear-gradient(to right, #F4F1E8 0%, #FFFFFF 15%, #FCFCFA 88%, #EAE6DB 100%)',
          }}
        >
          {/* Page header */}
          <div className="flex items-center justify-between border-b border-[#E8E5DC] pb-2">
            <span className="text-[10px] font-semibold tracking-wider uppercase text-[#138808]">
              SCP FOUNDATION
            </span>
            <span className="text-[10px] text-[#8C93A0] font-mono">EST. 2011</span>
          </div>

          {/* Page body */}
          <div className="my-auto py-2">
            <div className="w-8 h-8 rounded-full bg-[#138808]/10 text-[#138808] flex items-center justify-center mb-2">
              <BookOpen className="w-4 h-4" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[#17212B] leading-snug">
              Educate Today.
            </h4>
            <p className="text-[11px] text-[#525866] mt-1 leading-relaxed line-clamp-3">
              Spreading literacy, learning kits, and school guidance for children in need.
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-[9px] font-medium text-[#138808] bg-[#138808]/10 px-2 py-0.5 rounded w-fit">
              <span>● Delhi NCR</span>
            </div>
          </div>

          {/* Page footer */}
          <div className="text-[9px] text-[#A0A6B2] text-center pt-1 border-t border-[#EFECE3]">
            Chapter I • Foundational Learning
          </div>
        </div>

        {/* RIGHT PAGE WING */}
        <div
          className="absolute right-0 top-0 w-1/2 h-full bg-[#FCFBF7] border border-[#E3E1D8] rounded-r-lg p-5 flex flex-col justify-between shadow-[10px_10px_25px_rgba(0,0,0,0.06)] origin-left"
          style={{
            transform: 'rotateY(24deg) translateZ(8px)',
            background: 'linear-gradient(to left, #F4F1E8 0%, #FFFFFF 15%, #FCFCFA 88%, #EAE6DB 100%)',
          }}
        >
          {/* Page header */}
          <div className="flex items-center justify-between border-b border-[#E8E5DC] pb-2">
            <span className="text-[10px] font-semibold tracking-wider uppercase text-[#FF9933]">
              MISSION
            </span>
            <span className="text-[10px] text-[#8C93A0] font-mono">VOL. XIV</span>
          </div>

          {/* Page body */}
          <div className="my-auto py-2">
            <div className="w-8 h-8 rounded-full bg-[#FF9933]/10 text-[#EA580C] flex items-center justify-center mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[#17212B] leading-snug">
              Empower Tomorrow.
            </h4>
            <p className="text-[11px] text-[#525866] mt-1 leading-relaxed line-clamp-3">
              Empowering women, digital literacy, and self-reliance across communities.
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-[9px] font-medium text-[#EA580C] bg-[#FF9933]/15 px-2 py-0.5 rounded w-fit">
              <span>● Sarita Vihar</span>
            </div>
          </div>

          {/* Page footer */}
          <div className="text-[9px] text-[#A0A6B2] text-center pt-1 border-t border-[#EFECE3]">
            Chapter II • Sustainable Growth
          </div>
        </div>

        {/* Layered Paper Edge Effect (simulating stacked pages below) */}
        <div 
          className="absolute left-3 right-3 -bottom-2 h-2 bg-[#E6E2D5] rounded-b border border-[#D9D4C5] -z-10"
          style={{ transform: 'translateZ(-5px)' }}
        />
        <div 
          className="absolute left-6 right-6 -bottom-3.5 h-2 bg-[#DDD8C9] rounded-b border border-[#CDC7B6] -z-20"
          style={{ transform: 'translateZ(-12px)' }}
        />

        {/* Hardcover Backing Base */}
        <div 
          className="absolute -inset-1.5 bg-[#17212B] rounded-xl -z-30 shadow-xl"
          style={{ transform: 'translateZ(-20px)' }}
        />
      </div>

      {/* Floating Caption / Interactive Cue */}
      <div className="mt-8 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/80 border border-[#E2E4DC] text-[#525866] shadow-sm backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-[#138808] animate-pulse" />
          Symbol of Education &amp; Opportunity
          {isHovered && <span className="text-[#8C93A0] text-[10px] font-mono hidden sm:inline">(Interactive CSS 3D)</span>}
        </span>
      </div>
    </div>
  );
};
