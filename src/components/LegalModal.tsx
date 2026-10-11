import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { ORGANIZATION_DETAILS } from '../data/organizationData';

export type LegalDocType = 'privacy' | 'terms' | null;

interface LegalModalProps {
  activeDoc: LegalDocType;
  onClose: () => void;
  onSwitchDoc: (doc: 'privacy' | 'terms') => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  activeDoc,
  onClose,
  onSwitchDoc,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (activeDoc) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDoc, onClose]);

  if (!activeDoc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="relative bg-white text-[#17212B] w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col border border-[#E2E4DC] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 py-4 border-b border-[#E8ECE9] flex items-center justify-between bg-[#FAFAF7]">
          <div className="flex items-center gap-2">
            {activeDoc === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-[#138808]" />
            ) : (
              <FileText className="w-5 h-5 text-[#FF9933]" />
            )}
            <h2 id="legal-modal-title" className="text-base sm:text-lg font-bold text-[#17212B]">
              {activeDoc === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h2>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#525866] hover:text-[#17212B] hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-5 py-2.5 bg-[#F3F4F1] border-b border-[#E2E4DC] flex items-center gap-2 text-xs font-semibold">
          <button
            type="button"
            onClick={() => onSwitchDoc('privacy')}
            className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeDoc === 'privacy'
                ? 'bg-[#17212B] text-white shadow-xs'
                : 'text-[#525866] hover:text-[#17212B] hover:bg-white'
            }`}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => onSwitchDoc('terms')}
            className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeDoc === 'terms'
                ? 'bg-[#17212B] text-white shadow-xs'
                : 'text-[#525866] hover:text-[#17212B] hover:bg-white'
            }`}
          >
            Terms &amp; Conditions
          </button>
        </div>

        {/* Content Scroll Container */}
        <div className="px-6 py-6 overflow-y-auto space-y-6 text-sm text-[#525866] leading-relaxed">
          {activeDoc === 'privacy' ? (
            /* PRIVACY POLICY CONTENT */
            <>
              <div className="border-b border-[#E8ECE9] pb-4">
                <span className="text-xs font-mono text-[#8C93A0]">Last Updated: October 2026</span>
                <p className="mt-1 font-medium text-[#17212B]">
                  SCP Foundation NGO is committed to respecting and protecting the privacy of our visitors, donors, volunteers, and beneficiaries. This policy outlines our data handling practices in compliance with the Digital Personal Data Protection Act (DPDP Act, 2023) and Information Technology Act, 2000 of India.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#17212B]">1. Information We Collect</h3>
                <p>
                  When you voluntarily submit an enquiry, volunteer application, or donation acknowledgement through our website, we may collect:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>Personal Identifiers:</strong> Name, email address, and mobile phone number.</li>
                  <li><strong>Message Content:</strong> Inquiries regarding child education, vocational training, or volunteering interests.</li>
                  <li><strong>Donation References:</strong> Voluntary UPI transaction references or acknowledgement screenshots transmitted directly by you via WhatsApp or email.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#17212B]">2. Purpose of Data Processing</h3>
                <p>The information we collect is strictly utilized to:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Respond to community queries and volunteer applications.</li>
                  <li>Facilitate educational assistance and study kit distributions.</li>
                  <li>Issue administrative acknowledgements for voluntary UPI donations.</li>
                  <li>Ensure transparency and records keeping required under the Societies Registration Act, 1860.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#17212B]">3. Zero Commercial Sale or Third-Party Disclosures</h3>
                <p>
                  We <strong className="text-[#17212B]">do not sell, rent, lease, or monetize</strong> your personal contact information to any marketing agencies or commercial entities under any circumstances. Personal records are accessible solely to authorized NGO coordinators for legitimate public-welfare operations.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#17212B]">4. Direct Communication via WhatsApp</h3>
                <p>
                  Our enquiry form directs messages directly to the official NGO WhatsApp helpline (+91 95555 37474). Any messages transmitted over WhatsApp are subject to WhatsApp's end-to-end encryption and standard privacy terms.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#17212B]">5. Data Security &amp; Retention</h3>
                <p>
                  We maintain reasonable administrative safeguards to prevent unauthorized access or disclosure of personal data. Information is retained only as long as necessary to fulfill communication or regulatory record-keeping duties.
                </p>
              </div>

              <div className="space-y-2 border-t border-[#E8ECE9] pt-4">
                <h3 className="text-base font-bold text-[#17212B]">6. Grievance Officer &amp; Contact</h3>
                <p className="text-xs">
                  For privacy inquiries, data rectification, or removal requests, please write to our administrative secretariat:
                </p>
                <div className="bg-[#FAFAF7] p-3.5 rounded-xl border border-[#E2E4DC] text-xs text-[#17212B] space-y-1">
                  <div><strong>Secretariat:</strong> SCP Foundation NGO</div>
                  <div><strong>Address:</strong> {ORGANIZATION_DETAILS.registeredOffice}</div>
                  <div><strong>Email:</strong> {ORGANIZATION_DETAILS.email}</div>
                  <div><strong>Helpline:</strong> {ORGANIZATION_DETAILS.phone}</div>
                </div>
              </div>
            </>
          ) : (
            /* TERMS & CONDITIONS CONTENT */
            <>
              <div className="border-b border-[#E8ECE9] pb-4">
                <span className="text-xs font-mono text-[#8C93A0]">Last Updated: October 2026</span>
                <p className="mt-1 font-medium text-[#17212B]">
                  These Terms &amp; Conditions govern the use of the official website of SCP Foundation NGO, an organization registered under the Societies Registration Act, 1860 (Act XXI of 1860) in New Delhi, India.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#17212B]">1. Non-Profit Character &amp; Scope of Work</h3>
                <p>
                  SCP Foundation NGO operates as a charitable non-profit society with focus areas in primary child education, women's empowerment, computer literacy, and community welfare. All materials published on this website are provided for informational and community engagement purposes.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#17212B]">2. Voluntary UPI Donations Policy</h3>
                <p>
                  When making voluntary donations via our official UPI QR code (<code>royaldigi@sbi</code>):
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>Voluntary Contributions:</strong> All financial contributions are made voluntarily to support educational kits, student materials, and welfare drives.</li>
                  <li><strong>Non-Refundable:</strong> Because donations are immediately committed to community welfare initiatives, donations are non-refundable once processed.</li>
                  <li><strong>Receipts:</strong> Donors who require official administrative receipts may share their UPI transaction ID or screenshot directly via our official WhatsApp or email.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#17212B]">3. Intellectual Property &amp; Authentic Media</h3>
                <p>
                  The official logo with trademark mark (TM), slogans (“Educate Today… Empower Tomorrow…”, “छोटा सहयोग • बड़ा बदलाव”), authentic training center photographs, and campaign posters published on this portal are the intellectual property of SCP Foundation NGO. Unauthorized reproduction or commercial use without prior written authorization is prohibited.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#17212B]">4. External Links</h3>
                <p>
                  This portal includes links to third-party services such as Google Maps, WhatsApp, and archived digital channels. SCP Foundation NGO is not responsible for the privacy practices or contents of external websites.
                </p>
              </div>

              <div className="space-y-2 border-t border-[#E8ECE9] pt-4">
                <h3 className="text-base font-bold text-[#17212B]">5. Governing Law &amp; Jurisdiction</h3>
                <p className="text-xs">
                  These Terms shall be construed in accordance with the laws of India. Any disputes arising in connection with this website shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#FAFAF7] border-t border-[#E8ECE9] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[#138808] font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Official Legal Governance • New Delhi</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#17212B] hover:bg-[#2A3745] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
