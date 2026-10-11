import React from 'react';
import { Calendar, MapPin, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { ORGANIZATION_DETAILS } from '../data/organizationData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FAFAF7] scroll-mt-20" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#138808] uppercase">
            Organizational Identity &amp; Heritage
          </span>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight">
            About SCP Foundation NGO
          </h2>
          <div className="w-16 h-1 bg-[#138808] mx-auto rounded-full" />
          <p className="text-base text-[#525866]">
            Dedicated to uplifting disadvantaged communities through education, skill development, and community welfare since 2011.
          </p>
        </div>

        {/* Narrative & Facts Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#525866] leading-relaxed">
            <h3 className="text-2xl font-bold text-[#17212B] leading-snug">
              A Grassroots Commitment to Social Upliftment
            </h3>
            
            <p>
              <strong className="text-[#17212B]">SCP Foundation NGO</strong> (also recognized in published material as <em className="not-italic text-[#17212B] font-medium">SCP Foundation (Regd.)</em> and <em className="not-italic text-[#17212B] font-medium">SCP Foundation Society</em>) was established on <span className="text-[#17212B] font-semibold">26 May 2011</span>. With its headquarters located in Sarita Vihar, New Delhi, the organization has consistently focused on serving poor and underprivileged segments of society, prioritizing children and women.
            </p>

            <p>
              Over the course of more than a decade of grassroots work, the Foundation has addressed systemic vulnerabilities by organizing study-material drives, computer education centers, women's empowerment initiatives, and community awareness programs in urban clusters such as Madanpur Khadar, Ali Vihar, and neighboring Delhi NCR sectors.
            </p>

            <div className="p-5 rounded-xl bg-white border border-[#E2E4DC] space-y-3 shadow-xs">
              <h4 className="text-sm font-bold text-[#17212B] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#FF9933]" />
                Published Mission Statement
              </h4>
              <p className="text-sm text-[#17212B] italic">
                “{ORGANIZATION_DETAILS.missionStatement}”
              </p>
            </div>

            {/* Transparent Governance Note */}
            <div className="p-4 rounded-xl bg-[#F0F2EE] border border-[#DDE1D9] text-xs space-y-2 text-[#525866]">
              <div className="flex items-center gap-1.5 font-semibold text-[#17212B]">
                <AlertCircle className="w-4 h-4 text-[#138808]" />
                <span>Verification &amp; Registration Notice</span>
              </div>
              <p>
                The organization’s public profiles cite registration under the <em>Societies Registration Act, 1860 (Act XXI of 1860)</em>. In keeping with our strict content integrity policy, independent state certificates and internal registry filings are maintained directly by the organization’s administration.
              </p>
            </div>
          </div>

          {/* Right Verified Facts Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E4DC] shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#17212B] pb-3 border-b border-[#E8ECE9]">
              Verified Organizational Details
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FAFAF7] text-[#138808] shrink-0 border border-[#E8ECE9]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[#17212B]">Established</div>
                  <div className="text-[#525866]">26 May 2011 (Operating over 13 years)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FAFAF7] text-[#FF9933] shrink-0 border border-[#E8ECE9]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[#17212B]">Registered Office</div>
                  <div className="text-[#525866] leading-relaxed">
                    H. No. 1010/121, Madanpur Khadar, Sarita Vihar, New Delhi, Delhi 110076, India
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FAFAF7] text-[#17212B] shrink-0 border border-[#E8ECE9]">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[#17212B]">Legal Framework</div>
                  <div className="text-[#525866]">Societies Registration Act, 1860</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8ECE9]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#17212B] mb-3">
                Core Domains of Service
              </h4>
              <ul className="grid grid-cols-1 gap-2 text-xs text-[#525866]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#138808]" />
                  <span>Child Education, Book Drives &amp; Study Supplies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#138808]" />
                  <span>Women’s Vocational Tailoring &amp; Skill Centers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#138808]" />
                  <span>Basic Computer Education &amp; Digital Literacy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#138808]" />
                  <span>Community Welfare &amp; Preventive Health Sessions</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center text-xs font-semibold text-[#17212B] bg-[#FAFAF7] hover:bg-[#F3F4F1] border border-[#E2E4DC] py-2.5 rounded-lg transition-colors"
              >
                Reach Out to the Secretariat
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
