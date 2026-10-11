import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  src: string;
  title: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  src,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accessible, Easy-to-Tap Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 sm:-top-12 sm:right-2 z-20 text-white bg-black/70 sm:bg-white/10 hover:bg-black/90 sm:hover:bg-white/20 p-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors cursor-pointer shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Close image modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-h-[80vh] flex items-center justify-center">
          <img
            src={src}
            alt={title}
            className="w-auto h-auto max-h-[75vh] max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-3 text-center text-white/90 text-sm max-w-xl flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0" />
          <span className="font-medium">{title}</span>
          <span className="text-white/40 text-xs">• SCP Foundation Official Media</span>
        </div>
      </div>
    </div>
  );
};
