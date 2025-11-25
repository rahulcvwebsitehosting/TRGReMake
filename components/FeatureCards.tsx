import React from 'react';
import { HelpCircle, Gift, Target, HeartHandshake } from 'lucide-react';

interface FeatureCardsProps {
  onRestrictedClick: () => void;
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ onRestrictedClick }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Help Center */}
      <div 
        onClick={onRestrictedClick}
        className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg p-4 h-32 md:h-40 relative overflow-hidden shadow-md cursor-pointer hover:opacity-95 transition-opacity"
      >
        <div className="absolute top-4 left-4 z-10">
           {/* Stars decoration */}
           <div className="text-white opacity-80 text-xs absolute -top-2 -left-2">✦</div>
        </div>
        
        {/* Mock 3D Graphic */}
        <div className="absolute right-2 bottom-2 w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-lg transform rotate-12 backdrop-blur-sm flex items-center justify-center">
            <HelpCircle className="w-12 h-12 text-white drop-shadow-lg" />
        </div>
        <div className="absolute right-8 bottom-8 w-16 h-16 bg-blue-600/30 rounded-lg transform -rotate-6"></div>

        <div className="absolute bottom-3 left-4 text-white font-bold text-sm md:text-base drop-shadow-md">
          Help Center&gt;
        </div>
      </div>

      {/* Red Envelope */}
      <div 
        onClick={onRestrictedClick}
        className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-4 h-32 md:h-40 relative overflow-hidden shadow-md cursor-pointer hover:opacity-95 transition-opacity"
      >
         <div className="absolute top-2 right-10 text-yellow-200 text-xs">✦</div>
         
         {/* Mock 3D Graphic */}
         <div className="absolute right-4 top-4 w-20 h-20 flex items-center justify-center">
             <div className="relative">
                 <div className="absolute w-12 h-16 bg-red-600 rounded border-2 border-yellow-400 transform -rotate-12 shadow-lg z-10"></div>
                 <div className="absolute w-12 h-16 bg-red-600 rounded border-2 border-yellow-400 transform rotate-12 left-4 shadow-lg z-0"></div>
                 <Gift className="w-10 h-10 text-yellow-300 absolute top-2 left-2 z-20" />
             </div>
         </div>

        <div className="absolute bottom-3 left-4 text-white font-bold text-sm md:text-base drop-shadow-md">
          Red envelope&gt;
        </div>
      </div>

      {/* Lucky Wheel */}
      <div 
        onClick={onRestrictedClick}
        className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-4 h-32 md:h-40 relative overflow-hidden shadow-md cursor-pointer hover:opacity-95 transition-opacity"
      >
         
         {/* Mock 3D Graphic */}
         <div className="absolute right-4 top-2 md:top-4 w-20 h-20">
            <div className="w-16 h-16 rounded-full border-4 border-white/50 bg-red-500 flex items-center justify-center shadow-lg relative animate-[spin_10s_linear_infinite]">
                 <Target className="w-10 h-10 text-yellow-300" />
                 <div className="absolute w-1 h-3 bg-white top-0 left-1/2 -translate-x-1/2 -translate-y-1"></div>
            </div>
         </div>

        <div className="absolute bottom-3 left-4 text-[#8B4513] font-bold text-sm md:text-base drop-shadow-sm">
          Lucky Wheel&gt;
        </div>
      </div>

      {/* Charity Event */}
      <div 
        onClick={onRestrictedClick}
        className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg p-4 h-32 md:h-40 relative overflow-hidden shadow-md cursor-pointer hover:opacity-95 transition-opacity"
      >
         
         {/* Mock 3D Graphic */}
         <div className="absolute right-4 top-4">
             <div className="relative">
                 <HeartHandshake className="w-16 h-16 text-red-500 fill-red-500 drop-shadow-lg transform scale-110" />
                 <div className="absolute -bottom-1 -right-1 text-yellow-300 text-lg">$</div>
                 <div className="absolute -top-1 -left-1 text-yellow-300 text-sm">$</div>
             </div>
         </div>

        <div className="absolute bottom-3 left-4 text-[#006400] font-bold text-sm md:text-base drop-shadow-sm">
          Charity event&gt;
        </div>
      </div>

      {/* Partial Blue Card at bottom */}
      <div className="col-span-1 bg-blue-400 rounded-lg p-4 h-24 relative overflow-hidden shadow-md opacity-80">
          <div className="absolute bottom-3 left-4 text-white font-bold text-sm">...</div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default FeatureCards;