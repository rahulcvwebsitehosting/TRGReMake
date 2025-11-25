import React from 'react';
import { Headphones } from 'lucide-react';

interface HeaderProps {
  onRestrictedClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRestrictedClick }) => {
  return (
    <header className="bg-white w-full h-14 flex items-center justify-between px-4 md:px-8 shadow-sm relative z-10">
      {/* Logo Area */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <Headphones className="w-6 h-6 text-purple-600" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        </div>
        <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          TRG
        </span>
      </div>

      {/* Language Selector */}
      <button 
        onClick={onRestrictedClick}
        className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity"
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="30" height="15">
            <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
            </clipPath>
            <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
            </clipPath>
            <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
            </g>
        </svg>
      </button>
    </header>
  );
};

export default Header;