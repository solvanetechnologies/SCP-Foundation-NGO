import React from 'react';
import { BookOpen, Sparkles, Laptop, ShieldCheck } from 'lucide-react';


export const IntroSection: React.FC = () => {
  const pillars = [
    {
      title: "Foundational Literacy",
      desc: "Ensuring children in economically marginalized communities receive textbooks, notebooks, study kits, and coaching.",
      icon: BookOpen,
      color: "border-l-[#138808]"
    },
    {
      title: "Women's Independence",
      desc: "Creating safe vocational spaces where girls and women acquire digital skills, tailoring training, and legal awareness.",
      icon: Sparkles,
      color: "border-l-[#FF9933]"
    },
    {
      title: "Digital Inclusivity",
      desc: "Bridging the persistent tech barrier by teaching essential computer competencies to youth seeking employment.",
      icon: Laptop,
      color: "border-l-[#17212B]"
    },
    {
      title: "Community Dignity",
      desc: "Upholding human rights, public health awareness, sanitation drives, and disaster solidarity in urban slums.",
      icon: ShieldCheck,
      color: "border-l-[#138808]"
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-[#E8ECE9]" aria-labelledby="intro-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Editorial Header */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold tracking-wider text-[#138808] uppercase">
              Our Guiding Purpose
            </span>
            <h2 id="intro-heading" className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight leading-tight">
              Building Opportunities. Empowering Communities.
            </h2>
            <div className="w-16 h-1 bg-[#FF9933] rounded-full" />
            <p className="text-base text-[#525866] leading-relaxed pt-2">
              For over a decade, SCP Foundation NGO has operated with a straightforward conviction: genuine social transformation begins when we break generational barriers through quality education, practical vocation, and gender equality.
            </p>
            <p className="text-sm text-[#525866] leading-relaxed italic border-l-2 border-[#138808] pl-3 py-1 bg-[#FAFAF7]">
              “जब एक महिला सशक्त होती है, तो पूरा परिवार और समाज सशक्त होता है।”
            </p>
          </div>

          {/* Right Pillar Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`bg-[#FAFAF7] p-6 rounded-xl border border-[#E2E4DC] border-l-4 ${pillar.color} shadow-xs hover:shadow-sm transition-shadow duration-200`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E4DC] text-[#17212B] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5 text-[#138808]" />
                  </div>
                  <h3 className="text-base font-bold text-[#17212B] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
