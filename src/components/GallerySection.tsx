import React from 'react';
import { Camera, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/organizationData';

interface GallerySectionProps {
  onOpenLightbox: (src: string, title: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-20 border-b border-[#E8ECE9]" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#138808]/10 text-[#138808] text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Verified Organizational Media</span>
          </div>
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight">
            Activity Gallery &amp; Campaign Records
          </h2>
          <div className="w-16 h-1 bg-[#138808] mx-auto rounded-full" />
          <p className="text-base text-[#525866]">
            Authentic photographs and official campaign publications retrieved directly from SCP Foundation NGO's public publications and archive records.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FAFAF7] rounded-2xl border border-[#E2E4DC] overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-200"
            >
              {/* Media Container */}
              <div 
                className="relative aspect-[4/3] bg-black/5 overflow-hidden cursor-pointer"
                onClick={() => onOpenLightbox(item.src, item.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenLightbox(item.src, item.title)}
                aria-label={`Open full size view of ${item.title}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-[2px]">
                  <ExternalLink className="w-4 h-4" />
                  <span>Enlarge Asset</span>
                </div>
                {item.isRealPhoto ? (
                  <span className="absolute top-2.5 left-2.5 bg-[#138808] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    Activity Photo
                  </span>
                ) : (
                  <span className="absolute top-2.5 left-2.5 bg-[#17212B] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    Campaign Art
                  </span>
                )}
              </div>

              {/* Information */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF9933] block">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-[#17212B] leading-snug line-clamp-1 mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#525866] mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E8ECE9] text-[10px] text-[#8C93A0] space-y-0.5">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#138808] shrink-0" />
                    <span className="truncate">{item.sourceOrigin}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#8C93A0] shrink-0" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media Authenticity Pledge */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#525866] max-w-2xl mx-auto italic bg-[#FAFAF7] py-3 px-4 rounded-xl border border-[#E2E4DC]">
            <strong className="text-[#17212B] not-italic">Authenticity Guarantee:</strong> SCP Foundation NGO does not use artificial intelligence or synthetic photo generation. All photographs and campaign media reflect genuine publications authorized by the organization.
          </p>
        </div>

      </div>
    </section>
  );
};
