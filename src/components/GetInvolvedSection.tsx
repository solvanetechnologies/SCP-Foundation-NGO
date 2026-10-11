import React from 'react';
import { Heart, Users, BookOpen, Handshake, ArrowRight, Phone } from 'lucide-react';
import { ORGANIZATION_DETAILS } from '../data/organizationData';

export const GetInvolvedSection: React.FC = () => {
  const pathways = [
    {
      title: "Sponsor Study Kits",
      desc: "Contribute books, stationery, school uniforms, or educational supplies for underprivileged students in Delhi.",
      icon: BookOpen,
      actionText: "Enquire About Education Kits",
      href: "#contact"
    },
    {
      title: "Volunteer as a Tutor",
      desc: "Share your knowledge by conducting remedial classes in basic English, Mathematics, or elementary computers.",
      icon: Users,
      actionText: "Ask About Volunteering",
      href: "#contact"
    },
    {
      title: "Women's Skill Mentorship",
      desc: "Mentor young women in practical vocations, craft techniques, digital literacy, or career self-reliance.",
      icon: Heart,
      actionText: "Join as a Mentor",
      href: "#contact"
    },
    {
      title: "Community Partnerships",
      desc: "Collaborate with our foundation on neighborhood health drives, book collection camps, or local outreach.",
      icon: Handshake,
      actionText: "Discuss a Partnership",
      href: "#contact"
    }
  ];

  return (
    <section id="get-involved" className="py-24 bg-white scroll-mt-20 border-b border-[#E8ECE9]" aria-labelledby="involved-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#FF9933] uppercase">
            Join the Movement
          </span>
          <h2 id="involved-heading" className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight">
            How You Can Get Involved
          </h2>
          <div className="w-16 h-1 bg-[#FF9933] mx-auto rounded-full" />
          <p className="text-base text-[#525866]">
            {ORGANIZATION_DETAILS.communitySlogan} — Every individual contribution of time, mentorship, or resources creates direct community value.
          </p>
        </div>

        {/* 4 Pathway Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#FAFAF7] p-6 rounded-2xl border border-[#E2E4DC] flex flex-col justify-between hover:border-[#138808] transition-colors duration-200 group shadow-xs"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E4DC] text-[#138808] flex items-center justify-center group-hover:bg-[#138808] group-hover:text-white transition-colors shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#17212B]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#525866] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#E8ECE9]">
                  <a
                    href={item.href}
                    className="text-xs font-bold text-[#17212B] group-hover:text-[#138808] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF9933]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Helpline Banner */}
        <div className="mt-12 bg-[#17212B] text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold">
              Ready to collaborate or discuss an initiative?
            </h4>
            <p className="text-xs text-white/70">
              Speak directly with our field coordinators at our Sarita Vihar office.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={ORGANIZATION_DETAILS.phoneHref}
              className="inline-flex items-center gap-2 bg-[#138808] hover:bg-[#0E6606] text-white text-xs font-semibold px-5 py-3 rounded-xl transition-colors shadow"
            >
              <Phone className="w-4 h-4 text-[#FF9933]" />
              <span>Call +91 95555 37474</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-5 py-3 rounded-xl border border-white/20 transition-colors"
            >
              <span>Send Message</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
