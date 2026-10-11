import React from 'react';
import { Target, HeartHandshake, Sparkles } from 'lucide-react';


export const ImpactNarrative: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-[#FAFAF7] scroll-mt-20" aria-labelledby="impact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#138808] uppercase">
            Community Realities
          </span>
          <h2 id="impact-heading" className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight">
            Our Perspective on Lasting Impact
          </h2>
          <div className="w-16 h-1 bg-[#138808] mx-auto rounded-full" />
          <p className="text-base text-[#525866]">
            Measuring progress not through artificial counters, but through tangible generational opportunities created in children’s lives and women’s livelihoods.
          </p>
        </div>

        {/* Narrative Columns */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl border border-[#E2E4DC] shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#138808]/10 text-[#138808] flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#17212B]">
              The Ripple of One Educated Child
            </h3>
            <p className="text-sm text-[#525866] leading-relaxed">
              In urban informal settlements like Madanpur Khadar, a single child completing secondary school fundamentally alters a family’s trajectory. Providing consistent study kits, notebooks, and homework coaching prevents premature dropouts and replaces child labor with academic aspiration.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E2E4DC] shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#FF9933]/15 text-[#EA580C] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#17212B]">
              Dignity Through Practical Competency
            </h3>
            <p className="text-sm text-[#525866] leading-relaxed">
              When young women master basic computer applications or tailoring craftsmanship at our center, they gain more than a skill—they achieve economic agency and a respected voice within their households. Empowerment is a daily, practical reality built through self-reliance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E2E4DC] shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#17212B]/10 text-[#17212B] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#17212B]">
              Consistent Grassroots Presence
            </h3>
            <p className="text-sm text-[#525866] leading-relaxed">
              Operating continuously since 2011, SCP Foundation has built trusted local roots in South East Delhi. Rather than transient short-term events, our regular physical training presence provides consistent mentorship and guidance for youth striving for a dignified livelihood.
            </p>
          </div>

        </div>

        {/* Grounded Truth Callout */}
        <div className="mt-12 bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E4DC] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-[#17212B]">
              A Commitment to Factual Honesty
            </h4>
            <p className="text-xs sm:text-sm text-[#525866]">
              We intentionally decline to display fabricated impact counters or estimated beneficiary totals. Our records and activity registers remain open for direct review at our Sarita Vihar office.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center justify-center text-xs font-semibold text-white bg-[#17212B] hover:bg-[#253240] px-5 py-3 rounded-xl transition-colors"
          >
            Visit Our Center &amp; Speak With Us
          </a>
        </div>

      </div>
    </section>
  );
};
