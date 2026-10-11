import React from 'react';
import { Phone, Heart } from 'lucide-react';
import { ORGANIZATION_DETAILS } from '../data/organizationData';

export const MobileQuickActions: React.FC = () => {
  const whatsappPreFilledText = encodeURIComponent(
    'Hello SCP Foundation NGO, I am reaching out from your website to learn more about your community programs and how I can support.'
  );
  const whatsappUrl = `https://wa.me/919555537474?text=${whatsappPreFilledText}`;

  return (
    <aside
      aria-label="Mobile quick actions"
      className="block sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2E4DC] px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={ORGANIZATION_DETAILS.phoneHref}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border border-[#E2E4DC] bg-white text-[#17212B] font-semibold text-xs hover:bg-[#F3F4F1] active:scale-95 transition-all shadow-2xs"
          aria-label="Call SCP Foundation helpline"
        >
          <Phone className="w-3.5 h-3.5 text-[#FF9933] shrink-0" />
          <span className="truncate">Call NGO</span>
        </a>

        {/* WhatsApp Direct Chat (Primary Action) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] min-h-[44px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#138808] text-white font-bold text-xs hover:bg-[#0E6606] active:scale-95 transition-all shadow-xs"
          aria-label="Chat on WhatsApp with SCP Foundation NGO"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.769.814 2.791.814 3.179 0 5.766-2.587 5.767-5.766.002-3.18-2.585-5.766-5.766-5.766zm9.969 5.766c-.002 5.519-4.49 9.998-10 9.998-1.748 0-3.376-.454-4.81-1.251l-5.19 1.359 1.385-5.059c-.89-1.488-1.385-3.238-1.385-5.047 0-5.52 4.49-10 10-10 5.51 0 10 4.48 10 10z" />
          </svg>
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Support / Donate QR Button */}
        <a
          href="#donate-campaign"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border border-[#FF9933]/30 bg-[#FFF7ED] text-[#EA580C] font-semibold text-xs hover:bg-[#FFEDD5] active:scale-95 transition-all shadow-2xs"
          aria-label="Donate to SCP Foundation NGO programs via UPI"
        >
          <Heart className="w-3.5 h-3.5 fill-current shrink-0" />
          <span className="truncate">Donate</span>
        </a>
      </div>
    </aside>
  );
};
