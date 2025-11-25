import React from 'react';
import { Volume2 } from 'lucide-react';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-[#E0F7F5] border-b border-[#cdece9] h-10 flex items-center px-4 overflow-hidden relative">
      <div className="flex-shrink-0 z-10 pr-2 bg-[#E0F7F5]">
        <Volume2 className="w-5 h-5 text-green-500" />
      </div>
      <div className="flex-1 overflow-hidden relative h-full flex items-center">
        <div className="animate-marquee whitespace-nowrap text-sm text-gray-700 font-medium absolute w-full">
          TRG sincerely looks forward to your joining us, and welcomes every excellent you to join hands with us to create a brilliant future!
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;