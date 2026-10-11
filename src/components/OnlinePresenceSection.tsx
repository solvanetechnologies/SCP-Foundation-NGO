import React from 'react';
import { ExternalLink, Share2 } from 'lucide-react';
import { SOCIAL_CHANNELS } from '../data/organizationData';


export const OnlinePresenceSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAFAF7] border-b border-[#E8ECE9]" aria-labelledby="online-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17212B]/5 text-[#17212B] text-xs font-bold uppercase tracking-wider">
            <Share2 className="w-3.5 h-3.5" />
            <span>Digital Footprint</span>
          </div>
          <h2 id="online-heading" className="text-3xl font-extrabold text-[#17212B] tracking-tight">
            Verified Archives &amp; Social Channels
          </h2>
          <div className="w-16 h-1 bg-[#17212B] mx-auto rounded-full" />
          <p className="text-base text-[#525866]">
            Publicly documented communication channels and activity feeds referencing SCP Foundation NGO across the web.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOCIAL_CHANNELS.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-2xl bg-white border border-[#E2E4DC] hover:border-[#138808] transition-all duration-200 flex flex-col justify-between shadow-2xs group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#138808] bg-[#138808]/10 px-2 py-0.5 rounded">
                    {item.platform}
                  </span>
                  <span className="text-[10px] font-mono text-[#8C93A0]">
                    {item.status.toUpperCase()}
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-[#17212B] group-hover:text-[#138808] transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-xs text-[#525866] leading-relaxed">
                  {item.note}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-[#E8ECE9]">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#17212B] hover:text-[#138808] transition-colors"
                  aria-label={`Visit SCP Foundation NGO on ${item.name}`}
                >
                  <span className="truncate">{item.handle}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF9933] shrink-0 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
