import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="w-full relative bg-gray-200">
      {/* Placeholder for the banner image - using a business-themed placeholder */}
      <div className="w-full h-48 md:h-64 lg:h-80 overflow-hidden relative">
        <img 
          src="https://picsum.photos/id/4/1200/400" 
          alt="Business Team Banner" 
          className="w-full h-full object-cover"
        />
        {/* Pagination Dots Overlay */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        </div>
      </div>
    </div>
  );
};

export default Banner;