import React from 'react';
import { Linkedin, X, User, Code, Coffee, Bug } from 'lucide-react';

interface LinkedInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LinkedInModal: React.FC<LinkedInModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Card */}
      <div className="relative w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all animate-in fade-in zoom-in-95 duration-300">
        
        {/* Decorative Header */}
        <div className="h-32 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full text-white transition-all backdrop-blur-sm z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Content */}
        <div className="px-6 pb-8 relative -mt-16">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-white bg-slate-50 shadow-lg flex items-center justify-center relative overflow-hidden group">
               <User className="w-16 h-16 text-slate-300" />
               <div className="absolute inset-0 bg-blue-500/10 hidden group-hover:flex items-center justify-center transition-all">
                  <span className="text-xs font-bold text-blue-600">Hire Me!</span>
               </div>
            </div>
            {/* Online/Status Indicator */}
            <div className="absolute top-20 ml-20 w-6 h-6 bg-green-500 border-4 border-white rounded-full shadow-sm" title="Online & Caffeinated"></div>
          </div>

          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900">Rahul Shyam</h2>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mt-1">
              Civil Engineer & Developer
            </p>
            
            {/* The Silly Part - Tags */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full flex items-center gap-1 border border-purple-200">
                    <Code className="w-3 h-3" /> React Ninja
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full flex items-center gap-1 border border-amber-200">
                    <Coffee className="w-3 h-3" /> Powered by Tea
                </span>
                <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded-full flex items-center gap-1 border border-rose-200">
                    <Bug className="w-3 h-3" /> Bug Creator
                </span>
            </div>

            <p className="mt-5 text-slate-600 text-sm leading-relaxed">
              "I turn coffee into code and construction plans into digital reality. 
              Currently seeking new opportunities to center divs and build skyscrapers (metaphorically). 🏗️"
            </p>

            {/* Stats Row - Silly & Serious */}
            <div className="grid grid-cols-3 gap-2 mt-6 border-t border-slate-100 pt-6">
                <div className="text-center">
                    <div className="text-lg font-bold text-slate-800">500+</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Connections</div>
                </div>
                <div className="text-center border-l border-slate-100">
                    <div className="text-lg font-bold text-slate-800">100%</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Commitment</div>
                </div>
                <div className="text-center border-l border-slate-100">
                    <div className="text-lg font-bold text-slate-800">∞</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Sarcasm</div>
                </div>
            </div>

            <div className="mt-8 space-y-3">
                <a 
                  href="https://www.linkedin.com/in/rahulshyamcivil/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#0077b5] hover:bg-[#006097] text-white py-3.5 px-6 rounded-xl font-bold shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Connect on LinkedIn</span>
                </a>
                
                <button 
                    onClick={onClose}
                    className="text-xs text-slate-400 hover:text-slate-600 font-medium transition-colors py-2"
                >
                    Maybe later (I hate networking)
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInModal;