import React from 'react';
import { BookOpen, Backpack, Laptop, GraduationCap, Phone, ShieldAlert, ArrowRight } from 'lucide-react';
import { ORGANIZATION_DETAILS } from '../data/organizationData';


interface CampaignSectionProps {
  onOpenLightbox?: (src: string, title: string) => void;
}

export const CampaignSection: React.FC<CampaignSectionProps> = ({ onOpenLightbox }) => {
  const needs = [
    {
      title: "Books & Study Materials",
      desc: "NCERT curriculum books, practice workbooks, reference guides, and reading materials.",
      icon: BookOpen
    },
    {
      title: "School Supplies & Kits",
      desc: "Bags, notebooks, geometry kits, writing sets, and basic uniforms for primary schoolers.",
      icon: Backpack
    },
    {
      title: "Computer Education",
      desc: "Hardware maintenance and software training support for student computer labs.",
      icon: Laptop
    },
    {
      title: "Tuition & Learning Support",
      desc: "Remedial teaching sessions for first-generation learners facing learning barriers.",
      icon: GraduationCap
    }
  ];

  return (
    <section 
      id="donate-campaign" 
      className="py-24 bg-[#17212B] text-white relative overflow-hidden scroll-mt-20"
      aria-labelledby="campaign-heading"
    >
      {/* Restrained tricolour edge accents */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Campaign Banner */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div 
              className="relative group cursor-pointer max-w-[340px] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl hover:border-[#FF9933] transition-all duration-300"
              onClick={() => onOpenLightbox?.('/assets/donate-education-campaign.png', 'Donate for Education Campaign Banner')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onOpenLightbox?.('/assets/donate-education-campaign.png', 'Donate for Education Campaign Banner')}
              aria-label="View verified Donate for Education Campaign graphic"
            >
              <img
                src="/assets/donate-education-campaign.png"
                alt="Official Donate for Education campaign poster issued by SCP Foundation NGO"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-[2px]">
                <span>Click to Expand Banner</span>
              </div>
            </div>
            <span className="text-xs text-white/50 mt-3 font-mono">
              Campaign Theme: Educate Today… Empower Tomorrow…
            </span>
          </div>

          {/* Right Column: Educational Campaign Details */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FF9933] text-xs font-bold uppercase tracking-wider border border-white/15">
              <span>Education Support Initiative</span>
            </div>

            <h2 id="campaign-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Help Open the Door to Education.
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Books, school supplies, computer education, and learning support can help children access opportunities that may otherwise remain permanently out of reach.
            </p>

            <p className="text-sm text-[#FF9933] font-medium italic">
              “हर बच्चे का सपना होता है कि वह पढ़े, सीखे और अपने भविष्य को बेहतर बनाए। आपका छोटा सा सहयोग किसी बच्चे के जीवन में बड़ा बदलाव ला सकता है।”
            </p>

            {/* What support facilitates */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {needs.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2 text-white font-semibold text-sm">
                      <Icon className="w-4 h-4 text-[#FF9933]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Transparent Contribution CTA */}
            <div className="pt-4 space-y-4">
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#FF9933] hover:bg-[#EA580C] text-[#17212B] hover:text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9933]"
                >
                  <span>Enquire About Donating</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={ORGANIZATION_DETAILS.phoneHref}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-5 py-3.5 rounded-xl border border-white/15 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#138808]" />
                  <span>Call {ORGANIZATION_DETAILS.phone}</span>
                </a>
              </div>

              {/* Strict Integrity Disclaimer */}
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-white/60">
                <ShieldAlert className="w-4 h-4 text-[#FF9933] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white/80">Transparency Note:</strong> Direct online payment gateways and tax certificates are currently processed manually via official NGO administrative verification. Please speak directly with the organization via official phone or email before transmitting contributions.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
