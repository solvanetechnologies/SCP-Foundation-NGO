import React from 'react';
import { MapPin, Navigation, Info } from 'lucide-react';
import { ORGANIZATION_DETAILS } from '../data/organizationData';

export const GeographySection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAFAF7]" aria-labelledby="geo-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#138808] uppercase">
              Location &amp; Footprint
            </span>
            <h2 id="geo-heading" className="text-3xl font-extrabold text-[#17212B] tracking-tight">
              Headquarters in Sarita Vihar, New Delhi
            </h2>
            <div className="w-16 h-1 bg-[#138808] rounded-full" />
            
            <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
              Our registered secretariat and primary field operations are anchored at <strong className="text-[#17212B]">H. No. 1010/121, Madanpur Khadar, Sarita Vihar, New Delhi (110076)</strong>. From this base, we coordinate regular educational support, tutoring, and vocational training across neighboring low-income urban settlements in South East Delhi.
            </p>

            {/* Historical Regional Outreach Note */}
            <div className="p-4 rounded-xl bg-white border border-[#E2E4DC] text-xs space-y-2 text-[#525866]">
              <div className="flex items-center gap-1.5 font-semibold text-[#17212B]">
                <Info className="w-4 h-4 text-[#FF9933]" />
                <span>Historical Regional Outreach</span>
              </div>
              <p>
                Organizational publications from earlier years record community drives and disaster relief activities across Bihar (Madhubani), Haryana (Faridabad / Tilpat), and Uttar Pradesh. Today, administrative inquiries, program enrollment, and volunteer coordination are centered at our confirmed New Delhi office.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={ORGANIZATION_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#17212B] hover:bg-[#253240] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#FF9933]" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E4DC] shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-[#17212B] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#138808]" />
              Official Office Coordinates
            </h3>
            
            <div className="space-y-2 text-sm text-[#525866] pb-4 border-b border-[#E8ECE9]">
              <p className="font-semibold text-[#17212B]">SCP Foundation NGO</p>
              <p>H. No. 1010/121, Madanpur Khadar</p>
              <p>Near Sarita Vihar, New Delhi, Delhi 110076, India</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-[#FAFAF7] border border-[#E2E4DC]">
                <div className="text-[#8C93A0] uppercase text-[10px] font-mono">Location Type</div>
                <div className="font-semibold text-[#17212B] mt-0.5">Primary Secretariat</div>
              </div>
              <div className="p-3 rounded-lg bg-[#FAFAF7] border border-[#E2E4DC]">
                <div className="text-[#8C93A0] uppercase text-[10px] font-mono">Metro / Access</div>
                <div className="font-semibold text-[#17212B] mt-0.5">Sarita Vihar Line, Delhi</div>
              </div>
            </div>

            <p className="text-[11px] text-[#8C93A0] italic pt-1">
              Visiting hours: Monday to Saturday. Prior appointment recommended via telephone (+91 95555 37474).
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
