import { FaWhatsapp } from 'react-icons/fa';

// Update this to your WhatsApp number in international format without '+'
const WHATSAPP_NUMBER = '9779801721020';
const DEFAULT_TEXT = encodeURIComponent('Hello! I would like to inquire about your construction services.');

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_TEXT}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 active:scale-95 transition"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}




