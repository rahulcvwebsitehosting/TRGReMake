import React, { useEffect, useRef, useState } from 'react';
import { Play, X, ExternalLink } from 'lucide-react';

interface SpecialPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AUDIO_URL = "https://qualified-copper-vhupexi3gs-40y01opwii.edgeone.dev/gok-gok-gok-gok-made-with-Voicemod.mp3";
const IMAGE_URL = "https://i.ibb.co/Z611014g/namam-download.png";

const SpecialPopup: React.FC<SpecialPopupProps> = ({ isOpen, onClose }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    if (isOpen) {
      setErrorMessage(null);
      const audio = audioRef.current;
      if (!audio) return;

      setShowPlayButton(false);
      audio.currentTime = 0;
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio playing successfully
          })
          .catch(error => {
            if (!isMounted) return;

            // CRITICAL FIX: Distinguish between Blocked Autoplay vs. Interrupted (Harmless)
            if (error.name === 'NotAllowedError') {
                setShowPlayButton(true);
            } else if (error.name === 'AbortError' || error.message.includes('interrupted')) {
                // Ignore interruption errors (common in React Strict Mode or fast toggling)
                console.debug("Audio play interrupted safely.");
            } else {
                // Only show error if it's not an expected interruption
                console.error("Audio Playback Error:", error);
                setErrorMessage("Audio playback issue");
            }
          });
      }
    } else {
        // Pause audio when closed
        if(audioRef.current) {
            audioRef.current.pause();
        }
    }

    return () => {
        isMounted = false;
    };
  }, [isOpen]);

  const handleManualPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (audio) {
      audio.play()
        .then(() => {
            setShowPlayButton(false);
        })
        .catch(() => setErrorMessage("Manual play failed"));
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div className="relative w-full max-w-md flex flex-col items-center animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors">
            <X className="w-8 h-8" />
        </button>

        {/* Image Content */}
        <div className="relative w-full aspect-[3/4] max-h-[60vh] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <img 
            src={IMAGE_URL} 
            alt="Popup Content" 
            className="w-full h-full object-contain"
            onError={(e) => {
                e.currentTarget.style.display = 'none';
                setErrorMessage("Image failed to load");
            }}
          />
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-col items-center gap-3 w-full">
          {showPlayButton && (
            <button 
              onClick={handleManualPlay}
              className="flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all active:scale-95 animate-bounce"
            >
              <Play fill="currentColor" className="w-5 h-5" />
              Tap to Play Audio
            </button>
          )}

          <p className="text-white/40 text-sm font-medium">Tap anywhere to close</p>
          
          {/* Credit Link - Replaces Status Log */}
          <a 
            href="https://www.linkedin.com/in/rahulshyamcivil/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} 
            className="group flex items-center gap-2 text-white/60 hover:text-[#0a66c2] transition-colors mt-4 px-4 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
          >
            <span className="text-sm font-medium tracking-wide">App Created By Rahul</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
          </a>

          {/* Error Message (Only if real error) */}
          {errorMessage && (
            <div className="mt-2 text-red-400 text-xs bg-red-900/20 px-2 py-1 rounded">
                {errorMessage}
            </div>
          )}
        </div>

        {/* Hidden Audio */}
        <audio ref={audioRef} preload="auto" playsInline loop>
            <source src={AUDIO_URL} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default SpecialPopup;