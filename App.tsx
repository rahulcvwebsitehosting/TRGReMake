import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import AnnouncementBar from './components/AnnouncementBar';
import GridMenu from './components/GridMenu';
import FeatureCards from './components/FeatureCards';
import BottomNav from './components/BottomNav';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SpecialPopup from './components/SpecialPopup';
import LinkedInModal from './components/LinkedInModal';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLinkedInOpen, setIsLinkedInOpen] = useState(false);

  const handleRestrictedAction = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    // Automatically open LinkedIn modal when the audio popup is closed
    // Small delay ensures smooth transition
    setTimeout(() => {
      setIsLinkedInOpen(true);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#D6F5EC] pb-24 relative overflow-x-hidden">
      {/* Top Header */}
      <Header onRestrictedClick={handleRestrictedAction} />
      
      {/* Main Scrollable Content */}
      <main className="w-full max-w-[1920px] mx-auto">
        <Banner />
        <AnnouncementBar />
        
        <div className="px-4 md:px-8 py-4 space-y-6">
          <GridMenu onRestrictedClick={handleRestrictedAction} />
          <FeatureCards onRestrictedClick={handleRestrictedAction} />
        </div>
      </main>

      {/* Floating Elements */}
      <FloatingWhatsApp onRestrictedClick={handleRestrictedAction} />
      
      {/* Fixed Bottom Navigation */}
      <BottomNav onRestrictedClick={handleRestrictedAction} />

      {/* Special Popup Overlay */}
      <SpecialPopup isOpen={isPopupOpen} onClose={handlePopupClose} />
      
      {/* LinkedIn Profile Modal */}
      <LinkedInModal isOpen={isLinkedInOpen} onClose={() => setIsLinkedInOpen(false)} />
    </div>
  );
}