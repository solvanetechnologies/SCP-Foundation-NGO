import React, { useState } from 'react';
import { MapPin, Phone, Mail, Navigation, AlertCircle, Clock } from 'lucide-react';
import { ORGANIZATION_DETAILS } from '../data/organizationData';


export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Education Support',
    message: '',
    honeypot: '', // anti-spam bot field
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setStatusMessage('Please complete all required fields (Name, Email, and Message).');
      return;
    }

    setFormStatus('idle');
    setStatusMessage('');

    // Construct pre-filled WhatsApp message
    const formattedMessage = 
      `*SCP Foundation NGO — Website Enquiry*\n\n` +
      `👤 *Name:* ${formData.name.trim()}\n` +
      `📧 *Email:* ${formData.email.trim()}\n` +
      `📞 *Phone:* ${formData.phone.trim() || 'Not provided'}\n` +
      `📌 *Area of Interest:* ${formData.subject}\n\n` +
      `💬 *Message:*\n${formData.message.trim()}\n\n` +
      `_Sent from SCP Foundation NGO Website_`;

    const whatsappNumber = '919555537474';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

    // Redirect to WhatsApp immediately
    window.open(whatsappUrl, '_blank') || (window.location.href = whatsappUrl);
  };



  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#138808] uppercase">
            Get In Touch
          </span>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight">
            Contact SCP Foundation NGO
          </h2>
          <div className="w-16 h-1 bg-[#138808] mx-auto rounded-full" />
          <p className="text-base text-[#525866]">
            We welcome inquiries from community members, parents, prospective volunteers, and social welfare partners.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#FAFAF7] p-6 sm:p-8 rounded-2xl border border-[#E2E4DC] space-y-6 shadow-xs">
              <h3 className="text-xl font-bold text-[#17212B]">
                Official Secretarial Desk
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E4DC] text-[#138808] flex items-center justify-center shrink-0 shadow-2xs mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C93A0]">
                    Registered Secretariat
                  </span>
                  <p className="text-sm font-semibold text-[#17212B]">
                    SCP Foundation NGO
                  </p>
                  <p className="text-xs text-[#525866] leading-relaxed">
                    {ORGANIZATION_DETAILS.registeredOffice}
                  </p>
                  <a
                    href={ORGANIZATION_DETAILS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#138808] hover:text-[#0E6606] pt-1"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E4DC] text-[#FF9933] flex items-center justify-center shrink-0 shadow-2xs mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C93A0]">
                    Primary Telephone
                  </span>
                  <p className="text-sm font-bold text-[#17212B]">
                    <a
                      href={ORGANIZATION_DETAILS.phoneHref}
                      className="hover:text-[#138808] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808] rounded"
                    >
                      {ORGANIZATION_DETAILS.phone}
                    </a>
                  </p>
                  <p className="text-xs text-[#525866]">
                    Client-confirmed primary voice &amp; helpline channel.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E4DC] text-[#17212B] flex items-center justify-center shrink-0 shadow-2xs mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C93A0]">
                    Official Correspondence
                  </span>
                  <p className="text-sm font-bold text-[#17212B]">
                    <a
                      href={ORGANIZATION_DETAILS.emailHref}
                      className="hover:text-[#138808] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808] rounded"
                    >
                      {ORGANIZATION_DETAILS.email}
                    </a>
                  </p>
                  <p className="text-xs text-[#525866]">
                    Public secretarial inbox for program enquiries.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-[#E8ECE9]">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E4DC] text-[#525866] flex items-center justify-center shrink-0 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C93A0]">
                    Office Working Hours
                  </span>
                  <p className="text-xs text-[#17212B] font-medium">
                    Monday to Saturday: 10:00 AM – 6:00 PM IST
                  </p>
                  <p className="text-[11px] text-[#8C93A0]">
                    Closed on public holidays.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Accessible Enquiry Form */}
          <div className="lg:col-span-7 bg-[#FAFAF7] p-6 sm:p-10 rounded-2xl border border-[#E2E4DC] shadow-xs">
            <h3 className="text-xl font-bold text-[#17212B] mb-2">
              Send an Official Enquiry
            </h3>
            <p className="text-xs text-[#525866] mb-6">
              Fill in your details below to transmit a formal message to our Sarita Vihar coordinators.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              {/* Anti-spam honeypot (hidden from human visitors) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_field">Do not fill this out</label>
                <input
                  type="text"
                  id="hp_field"
                  name="honeypot"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact_name" className="block text-xs font-bold text-[#17212B]">
                    Full Name <span className="text-[#EA580C]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-white border border-[#E2E4DC] rounded-lg px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-[#17212B] placeholder:text-[#A0A6B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808]"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="contact_email" className="block text-xs font-bold text-[#17212B]">
                    Email Address <span className="text-[#EA580C]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact_email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-white border border-[#E2E4DC] rounded-lg px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-[#17212B] placeholder:text-[#A0A6B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="contact_phone" className="block text-xs font-bold text-[#17212B]">
                    Phone Number <span className="text-xs font-normal text-[#8C93A0]">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="contact_phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-white border border-[#E2E4DC] rounded-lg px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-[#17212B] placeholder:text-[#A0A6B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808]"
                  />
                </div>

                {/* Category/Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact_subject" className="block text-xs font-bold text-[#17212B]">
                    Subject / Area of Interest
                  </label>
                  <select
                    id="contact_subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#E2E4DC] rounded-lg px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-[#17212B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808]"
                  >
                    <option value="Education Support">Education Support / Books Donation</option>
                    <option value="Women Empowerment">Women's Skill &amp; Tailoring Training</option>
                    <option value="Computer Literacy">Computer Education Inquiries</option>
                    <option value="Volunteering">Volunteering Opportunities</option>
                    <option value="Community Welfare">General Community Welfare</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact_message" className="block text-xs font-bold text-[#17212B]">
                  Your Message <span className="text-[#EA580C]">*</span>
                </label>
                <textarea
                  id="contact_message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we assist you or how would you like to participate?"
                  className="w-full bg-white border border-[#E2E4DC] rounded-lg px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-[#17212B] placeholder:text-[#A0A6B2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808]"
                />
              </div>

              {/* Status Message */}
              {formStatus === 'error' && (
                <div className="p-3 rounded-lg bg-[#FEF2F2] border border-[#FCA5A5] flex items-center gap-2 text-xs text-[#DC2626]">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}


              {/* Submit button */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#138808] hover:bg-[#0E6606] text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138808] focus-visible:ring-offset-2 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.769.814 2.791.814 3.179 0 5.766-2.587 5.767-5.766.002-3.18-2.585-5.766-5.766-5.766zm9.969 5.766c-.002 5.519-4.49 9.998-10 9.998-1.748 0-3.376-.454-4.81-1.251l-5.19 1.359 1.385-5.059c-.89-1.488-1.385-3.238-1.385-5.047 0-5.52 4.49-10 10-10 5.51 0 10 4.48 10 10z"/>
                  </svg>
                  <span>Submit Enquiry on WhatsApp</span>
                </button>
                <span className="text-[11px] text-[#8C93A0] text-center sm:text-left">
                  Redirects to WhatsApp with your pre-filled message
                </span>
              </div>


            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
