import React from 'react';
import { BookOpen, Award, ShieldCheck, Handshake, CheckCircle } from 'lucide-react';
import { VALUES_LIST } from '../data/organizationData';

export const ValuesSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    BookOpen,
    Award,
    ShieldCheck,
    Handshake
  };

  return (
    <section className="py-24 bg-white border-b border-[#E8ECE9]" aria-labelledby="values-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#138808] uppercase">
            Principles That Guide Us
          </span>
          <h2 id="values-heading" className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight">
            Our Values &amp; Approach
          </h2>
          <div className="w-16 h-1 bg-[#138808] mx-auto rounded-full" />
          <p className="text-base text-[#525866]">
            Every outreach effort is shaped by an enduring commitment to dignity, local ownership, and long-term capability building.
          </p>
        </div>

        {/* Asymmetrical Structured Values Presentation */}
        <div className="grid md:grid-cols-2 gap-8">
          {VALUES_LIST.map((val, idx) => {
            const Icon = iconMap[val.iconName] || BookOpen;
            return (
              <div
                key={val.title}
                className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E2E4DC] hover:border-[#138808] transition-all duration-200 group flex items-start gap-5 shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E4DC] group-hover:bg-[#138808] group-hover:text-white group-hover:border-[#138808] text-[#138808] flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#8C93A0]">
                    PRINCIPLE 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#17212B] leading-snug">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#525866] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Approach Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAFAF7] border border-[#E2E4DC] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#138808] shrink-0" />
            <p className="text-sm text-[#17212B]">
              <strong className="font-semibold">Local Community Engagement:</strong> Our programs are developed through active conversations with local parents, youth, and neighborhood elders in Madanpur Khadar &amp; Sarita Vihar.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-xs font-bold text-[#138808] hover:text-[#0E6606] underline underline-offset-4"
          >
            Connect With Our Field Team &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
