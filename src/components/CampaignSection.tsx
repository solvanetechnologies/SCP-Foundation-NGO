import React, { useState } from 'react';
import { 
  BookOpen, 
  Backpack, 
  Laptop, 
  GraduationCap, 
  Phone, 
  ShieldCheck, 
  Copy, 
  Check, 
  Smartphone, 
  ExternalLink,
  Heart
} from 'lucide-react';
import { ORGANIZATION_DETAILS } from '../data/organizationData';

interface CampaignSectionProps {
  onOpenLightbox?: (src: string, title: string) => void;
}

export const CampaignSection: React.FC<CampaignSectionProps> = ({ onOpenLightbox }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(ORGANIZATION_DETAILS.donation.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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

  const whatsappNotificationUrl = `https://wa.me/919555537474?text=${encodeURIComponent(
    'Hello SCP Foundation NGO, I have made a donation via UPI (royaldigi@sbi). Here are my transaction details for official acknowledgement:'
  )}`;

  return (
    <section 
      id="donate-campaign" 
      className="py-24 bg-[#17212B] text-white relative overflow-hidden scroll-mt-20"
      aria-labelledby="campaign-heading"
    >
      {/* Tricolour edge accents */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

      {/* Subtle background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FF9933]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#138808]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FF9933] text-xs font-bold uppercase tracking-wider border border-white/15">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Education Support Initiative • दान करें</span>
          </div>
          <h2 id="campaign-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Help Open the Door to Education.
          </h2>
          <div className="w-16 h-1 bg-[#FF9933] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            {ORGANIZATION_DETAILS.hindiMotto} — Your small contribution directly supports school kits, stationery, and free coaching for children in Sarita Vihar &amp; Delhi NCR.
          </p>
        </div>

        {/* 2-Column Grid: Left (Campaign Artwork & Needs) | Right (Authentic QR Donation Portal) */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Campaign Banner & Focus Areas */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Split Card: Official Artwork + Narrative */}
            <div className="bg-white/5 rounded-3xl border border-white/10 p-6 sm:p-8 space-y-6">
              
              <div className="grid sm:grid-cols-12 gap-6 items-center">
                {/* Poster Thumbnail */}
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div 
                    className="relative group cursor-pointer w-full max-w-[240px] rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl hover:border-[#FF9933] transition-all duration-300"
                    onClick={() => onOpenLightbox?.('/assets/donate-education-campaign.png', 'Donate for Education Campaign Banner')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && onOpenLightbox?.('/assets/donate-education-campaign.png', 'Donate for Education Campaign Banner')}
                    aria-label="View verified Donate for Education Campaign graphic"
                  >
                    <img
                      src="/assets/donate-education-campaign.png"
                      alt="Official Donate for Education campaign poster issued by SCP Foundation NGO"
                      className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-[2px]">
                      <ExternalLink className="w-4 h-4" />
                      <span>Enlarge Poster</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-white/50 mt-2 font-mono text-center">
                    Official Campaign Artwork
                  </span>
                </div>

                {/* Narrative Quote */}
                <div className="sm:col-span-7 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#138808]">
                    Foundational Mission
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    “छोटा सहयोग • बड़ा बदलाव”
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    Many children in Madanpur Khadar and surrounding clusters drop out simply for want of basic notebooks, pencils, or school uniforms. We work to eliminate these barriers.
                  </p>
                  <div className="pt-1 text-xs text-[#FF9933] font-medium">
                    Every rupee supports direct education materials &amp; coaching.
                  </div>
                </div>
              </div>

            </div>

            {/* What Your Contribution Facilitates */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">
                Where Contributions Go
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {needs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 hover:bg-white/8 transition-colors">
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
            </div>

            {/* Direct Telephone Helpline Link */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-white/75 text-center sm:text-left">
                Prefer to donate books, study supplies, or speak with coordinators directly?
              </div>
              <a
                href={ORGANIZATION_DETAILS.phoneHref}
                className="shrink-0 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-4 py-2.5 rounded-lg border border-white/20 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF9933]" />
                <span>Call Helpline: {ORGANIZATION_DETAILS.phone}</span>
              </a>
            </div>

          </div>


          {/* RIGHT COLUMN: OFFICIAL UPI DONATION QR PORTAL */}
          <div className="lg:col-span-5">
            <div className="bg-white text-[#17212B] rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#E2E4DC] relative overflow-hidden">
              
              {/* Card Header */}
              <div className="text-center space-y-1.5 pb-6 border-b border-[#E8ECE9]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#138808]/10 text-[#138808] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Official UPI Donation</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#17212B]">
                  Scan to Donate
                </h3>
                <p className="text-xs text-[#525866]">
                  Supports SCP Foundation NGO programs across Delhi NCR
                </p>
              </div>

              {/* QR Code Frame */}
              <div className="py-6 flex flex-col items-center">
                <div 
                  className="relative p-3 bg-white rounded-2xl border-2 border-[#17212B]/10 shadow-lg group cursor-pointer hover:border-[#138808] transition-colors"
                  onClick={() => onOpenLightbox?.(ORGANIZATION_DETAILS.donation.qrCodeImage, 'SCP Foundation NGO Official Donation QR Code')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onOpenLightbox?.(ORGANIZATION_DETAILS.donation.qrCodeImage, 'SCP Foundation NGO Official Donation QR Code')}
                  aria-label="Enlarge donation QR code"
                >
                  {/* Decorative corner brackets */}
                  <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#138808] rounded-tl" />
                  <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#FF9933] rounded-tr" />
                  <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#138808] rounded-bl" />
                  <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#FF9933] rounded-br" />

                  <img
                    src={ORGANIZATION_DETAILS.donation.qrCodeImage}
                    alt="Official UPI QR Code for SCP Foundation NGO"
                    className="w-56 h-56 object-contain rounded-lg"
                    loading="eager"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-[2px]">
                    <ExternalLink className="w-4 h-4" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>

                <span className="text-[11px] text-[#667085] mt-2.5 flex items-center gap-1 font-medium">
                  <Smartphone className="w-3.5 h-3.5 text-[#138808]" />
                  <span>Scan with GPay, PhonePe, Paytm, BHIM, or any UPI app</span>
                </span>
              </div>

              {/* UPI ID Copy Field */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-semibold text-[#525866]">
                  <span>Official UPI ID</span>
                  <span className="text-[#138808] font-bold">Verified VPA</span>
                </div>

                <div className="flex items-center justify-between gap-2 p-3 bg-[#FAFAF7] rounded-xl border border-[#E2E4DC]">
                  <div className="font-mono text-sm font-bold text-[#17212B] truncate select-all">
                    {ORGANIZATION_DETAILS.donation.upiId}
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyUpi}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      copied 
                        ? 'bg-[#138808] text-white shadow-xs' 
                        : 'bg-white border border-[#E2E4DC] text-[#17212B] hover:bg-[#F3F4F1] hover:text-[#138808]'
                    }`}
                    aria-label="Copy UPI ID to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Direct Pay Button & WhatsApp Confirmation */}
              <div className="pt-4 space-y-2.5">
                {/* Mobile Direct Deep-Link Button */}
                <a
                  href={ORGANIZATION_DETAILS.donation.upiLink}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#138808] hover:bg-[#0E6606] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-md transition-all active:scale-98"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Pay Directly via UPI App</span>
                </a>

                {/* WhatsApp Receipt / Acknowledgement Notification */}
                <a
                  href={whatsappNotificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#0F6A06] font-semibold text-xs py-2.5 px-3 rounded-xl transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#138808]" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.769.814 2.791.814 3.179 0 5.766-2.587 5.767-5.766.002-3.18-2.585-5.766-5.766-5.766zm9.969 5.766c-.002 5.519-4.49 9.998-10 9.998-1.748 0-3.376-.454-4.81-1.251l-5.19 1.359 1.385-5.059c-.89-1.488-1.385-3.238-1.385-5.047 0-5.52 4.49-10 10-10 5.51 0 10 4.48 10 10z"/>
                  </svg>
                  <span>Share Receipt on WhatsApp for Acknowledgement</span>
                </a>
              </div>

              {/* Supported UPI Apps & Governance Footer */}
              <div className="pt-5 mt-5 border-t border-[#E8ECE9] text-center space-y-2">
                <div className="flex items-center justify-center gap-3 text-[11px] font-semibold text-[#667085]">
                  <span>GPay</span>
                  <span>•</span>
                  <span>PhonePe</span>
                  <span>•</span>
                  <span>Paytm</span>
                  <span>•</span>
                  <span>BHIM UPI</span>
                  <span>•</span>
                  <span>SBI YONO</span>
                </div>
                <p className="text-[10px] text-[#8C93A0] leading-relaxed">
                  Beneficiary: <strong>SCP Foundation NGO</strong> ({ORGANIZATION_DETAILS.donation.bank})<br />
                  Regd. Under Societies Registration Act XXI of 1860, New Delhi.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
