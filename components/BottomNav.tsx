import React, { useState } from 'react';
import { Home, BarChart2, ClipboardList, Users, User } from 'lucide-react';
import { NavItem } from '../types';

interface BottomNavProps {
  onRestrictedClick: () => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'profit', label: 'Profit', icon: BarChart2 },
  { id: 'task', label: 'Task', icon: ClipboardList },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'mine', label: 'Mine', icon: User },
];

const BottomNav: React.FC<BottomNavProps> = ({ onRestrictedClick }) => {
  const [activeTab, setActiveTab] = useState('home');

  const handleNavClick = (id: string) => {
    if (id === 'home') {
      setActiveTab(id);
    } else {
      // For Profit, Task, Team, Mine - show popup instead of navigating
      onRestrictedClick();
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 h-16 z-40">
      <div className="max-w-[1920px] mx-auto h-full flex justify-around items-center px-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? 'text-[#2ecc71]' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <item.icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;