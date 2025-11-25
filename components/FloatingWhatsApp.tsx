import React from 'react';
import { Phone } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="#"
      className="fixed bottom-24 right-4 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors cursor-pointer"
      aria-label="Contact Support"
    >
      <Phone className="w-7 h-7 text-white fill-white" />
    </a>
  );
};

export default FloatingWhatsApp;