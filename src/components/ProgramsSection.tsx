import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Laptop, 
  HeartPulse, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { PROGRAMS } from '../data/organizationData';

interface ProgramsSectionProps {
  onOpenLightbox?: (src: string, title: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="programs" className="py-24 bg-white scroll-mt-20" aria-labelledby="programs-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-20">
          <span className="text-xs font-bold tracking-widest text-[#FF9933] uppercase">
            Dedicated Initiatives
          </span>
          <h2 id="programs-heading" className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight">
            Areas Where We Work
          </h2>
          <div className="w-16 h-1 bg-[#FF9933] mx-auto rounded-full" />
          <p className="text-base text-[#525866]">
            Targeted community interventions designed to uplift families, educate underprivileged youth, and equip women with practical tools for life.
          </p>
        </div>

        {/* Dynamic Multi-Style Layout for the 5 Programs */}
        <div className="space-y-16">
          
          {/* PROGRAM 1: Education & Child Development (Featured Split Layout with Campaign Artwork) */}
          <div className="bg-[#FAFAF7] rounded-3xl border border-[#E2E4DC] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xs">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#138808]/10 text-[#138808] text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>Program 01 • Child Education</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17212B] leading-tight">
                  Education &amp; Child Development
                </h3>

                <p className="text-base font-medium text-[#138808] italic">
                  “Every child deserves the opportunity to learn, grow, and build a brighter future.”
                </p>

                <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
                  Education remains the core foundation of our work in Sarita Vihar, Madanpur Khadar, and neighboring clusters. Many families struggle to afford basic textbooks, notebooks, school uniforms, and supplementary guidance. Through dedicated book drives, study kit distributions, and free coaching, we strive to keep underprivileged children in school.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {PROGRAMS[0].points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17212B]">
                      <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="#donate-campaign"
                    className="inline-flex items-center gap-2 bg-[#138808] hover:bg-[#0E6606] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                  >
                    <span>Support Child Education</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Verified Campaign Visual Showcase */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div 
                  className="relative group cursor-pointer max-w-[320px] rounded-2xl overflow-hidden border-2 border-white shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => onOpenLightbox?.('/assets/donate-education-poster.png', 'Education Awareness Campaign Poster')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onOpenLightbox?.('/assets/donate-education-poster.png', 'Education Awareness Campaign Poster')}
                  aria-label="View authentic Education Awareness Campaign artwork"
                >
                  <img
                    src="/assets/donate-education-poster.png"
                    alt="Authentic Education Awareness Campaign poster issued by SCP Foundation NGO"
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-[2px]">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Campaign Poster</span>
                  </div>
                </div>
                <span className="text-[11px] text-[#8C93A0] mt-2 italic text-center">
                  Official Education Campaign Art • SCP Foundation Archives
                </span>
              </div>

            </div>
          </div>


          {/* PROGRAM 2: Women's Empowerment (Featured Split Layout with Real Photograph) */}
          <div className="bg-[#FAFAF7] rounded-3xl border border-[#E2E4DC] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xs">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Verified Real Photograph of the Training Center */}
              <div className="lg:col-span-5 flex flex-col items-center order-2 lg:order-1">
                <div 
                  className="relative group cursor-pointer w-full max-w-[380px] rounded-2xl overflow-hidden border-2 border-white shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => onOpenLightbox?.('/assets/empowering-women-poster.jpg', 'SCP Foundation Training Center Beneficiaries')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onOpenLightbox?.('/assets/empowering-women-poster.jpg', 'SCP Foundation Training Center Beneficiaries')}
                  aria-label="View real photograph outside SCP Foundation Training Center"
                >
                  <img
                    src="/assets/empowering-women-poster.jpg"
                    alt="Authentic photograph outside the SCP Foundation Training Center showing beneficiaries and instructors"
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-[2px]">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Full Photograph</span>
                  </div>
                </div>
                <span className="text-[11px] text-[#8C93A0] mt-2 italic text-center">
                  Genuine Activity Photo: SCP Foundation Training Center, Delhi NCR
                </span>
              </div>

              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9933]/15 text-[#EA580C] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Program 02 • Gender &amp; Vocation</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17212B] leading-tight">
                  Women’s Empowerment &amp; Skills
                </h3>

                <p className="text-base font-medium text-[#EA580C] italic">
                  “Supporting women and girls through education, skills, knowledge, and opportunities for greater independence.”
                </p>

                <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
                  Real social progress is impossible if women remain sidelined from educational and financial independence. SCP Foundation conducts vocational tailoring training, computer literacy sessions, and workshops on women’s rights, helping women build tangible capabilities and self-esteem.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {PROGRAMS[1].points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17212B]">
                      <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#17212B] hover:bg-[#253240] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                  >
                    <span>Inquire About Women's Initiatives</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>


          {/* PROGRAMS 3, 4, 5 (Distinct Structured Editorial Trio) */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* PROGRAM 3: Digital Literacy & Skill Development */}
            <div className="bg-[#FAFAF7] p-8 rounded-2xl border border-[#E2E4DC] flex flex-col justify-between hover:border-[#17212B] transition-colors duration-200">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#17212B] text-white flex items-center justify-center shadow-xs">
                  <Laptop className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#17212B]">
                  Program 03
                </span>
                <h3 className="text-xl font-bold text-[#17212B]">
                  Digital Literacy &amp; Skills
                </h3>
                <p className="text-xs font-semibold text-[#17212B] italic">
                  “Making learning and digital skills accessible to all.”
                </p>
                <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                  Introducing underprivileged youth to basic operating systems, word processing, internet utilities, and digital safety to enhance career prospects.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#17212B]">
                  {PROGRAMS[2].points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#17212B] mt-1.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#E8ECE9] mt-6">
                <a
                  href="#contact"
                  className="text-xs font-bold text-[#17212B] hover:text-[#138808] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Learn about computer center</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* PROGRAM 4: Health & Nutrition Awareness */}
            <div className="bg-[#FAFAF7] p-8 rounded-2xl border border-[#E2E4DC] flex flex-col justify-between hover:border-[#138808] transition-colors duration-200">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#138808] text-white flex items-center justify-center shadow-xs">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#138808]">
                  Program 04
                </span>
                <h3 className="text-xl font-bold text-[#17212B]">
                  Health &amp; Nutrition
                </h3>
                <p className="text-xs font-semibold text-[#138808] italic">
                  “Supporting informed communities through awareness.”
                </p>
                <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                  Conducting hygiene awareness drives, sanitation education, and maternal nutrition guidance. Note: We focus on public knowledge and awareness rather than medical clinical treatment.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#17212B]">
                  {PROGRAMS[3].points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#138808] mt-1.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#E8ECE9] mt-6">
                <a
                  href="#contact"
                  className="text-xs font-bold text-[#138808] hover:text-[#0E6606] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Inquire about health drives</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* PROGRAM 5: Community Welfare & Human Rights */}
            <div className="bg-[#FAFAF7] p-8 rounded-2xl border border-[#E2E4DC] flex flex-col justify-between hover:border-[#FF9933] transition-colors duration-200">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF9933] text-white flex items-center justify-center shadow-xs">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
                  Program 05
                </span>
                <h3 className="text-xl font-bold text-[#17212B]">
                  Welfare &amp; Human Dignity
                </h3>
                <p className="text-xs font-semibold text-[#EA580C] italic">
                  “Dignity, inclusion, and collective action.”
                </p>
                <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                  Engaging with community elders, addressing grievances, offering disaster and flood-related relief solidarity when disasters strike vulnerable communities.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#17212B]">
                  {PROGRAMS[4].points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933] mt-1.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#E8ECE9] mt-6">
                <a
                  href="#contact"
                  className="text-xs font-bold text-[#EA580C] hover:text-[#C2410C] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Community solidarity details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
