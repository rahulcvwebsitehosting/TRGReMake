import React, { useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';

interface SpecialPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AUDIO_URL = "https://qualified-copper-vhupexi3gs-40y01opwii.edgeone.dev/gok-gok-gok-gok-made-with-Voicemod.mp3";
const IMAGE_URL = "https://i.ibb.co/Z611014g/namam-download.png";

const SpecialPopup: React.FC<SpecialPopupProps> = ({ isOpen, onClose }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [statusLog, setStatusLog] = useState<string[]>([]);

  const addLog = (msg: string) => {
    setStatusLog(prev => [...prev.slice(-3), msg]); // Keep last 3 logs
  };

  useEffect(() => {
    let isMounted = true;

    if (isOpen) {
      addLog("Popup opened.");
      const audio = audioRef.current;
      if (!audio) return;

      setShowPlayButton(false);
      audio.currentTime = 0;
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (isMounted) addLog("Audio playing.");
          })
          .catch(error => {
            if (!isMounted) return;

            // CRITICAL FIX: Distinguish between Blocked Autoplay vs. Interrupted (Harmless)
            if (error.name === 'NotAllowedError') {
                addLog("Autoplay blocked. Tap button.");
                setShowPlayButton(true);
            } else if (error.name === 'AbortError' || error.message.includes('interrupted')) {
                // Ignore interruption errors (common in React Strict Mode or fast toggling)
                console.debug("Audio play interrupted safely.");
            } else {
                addLog(`Error: ${error.message}`);
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
            addLog("Manual play started.");
        })
        .catch(err => addLog(`Manual play failed: ${err.message}`));
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
                addLog("Image failed to load.");
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
          
          {/* Debug Log (Visible only if issues exist) */}
          <div className="mt-2 w-full max-w-xs bg-black/40 rounded p-2 text-[10px] text-gray-400 font-mono border border-white/5 text-center min-h-[2em] flex items-center justify-center">
             {statusLog.length === 0 ? "Ready" : statusLog[statusLog.length - 1]}
          </div>
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