import React from 'react';
import { Upload, Wallet, BarChart3, FileText, Mail, FileCheck } from 'lucide-react';
import { GridMenuItem } from '../types';

interface GridMenuProps {
  onRestrictedClick: () => void;
}

const menuItems: GridMenuItem[] = [
  { id: 1, label: 'Withdrawal', icon: Upload, color: 'text-white', bgColor: 'bg-green-400' },
  { id: 2, label: 'Recharge', icon: Wallet, color: 'text-white', bgColor: 'bg-blue-400' },
  { id: 3, label: 'Wealth Fund', icon: BarChart3, color: 'text-white', bgColor: 'bg-orange-400' },
  { id: 4, label: 'Company guidance', icon: FileText, color: 'text-white', bgColor: 'bg-blue-300' },
  { id: 5, label: 'Invite', icon: Mail, color: 'text-white', bgColor: 'bg-orange-300' },
  { id: 6, label: 'Company Profile', icon: FileCheck, color: 'text-white', bgColor: 'bg-green-300' },
];

const GridMenu: React.FC<GridMenuProps> = ({ onRestrictedClick }) => {
  const handleItemClick = (id: number) => {
    // ID 1 is Withdrawal
    if (id === 1) {
      onRestrictedClick();
    }
  };

  return (
    <div className="bg-[#CFEFEC] rounded-xl p-6 shadow-sm border border-[#bcece7]">
      <div className="grid grid-cols-3 gap-y-6 gap-x-4">
        {menuItems.map((item) => (
          <div 
            key={item.id} 
            onClick={() => handleItemClick(item.id)}
            className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
          >
            <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center shadow-md`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <span className="text-xs md:text-sm text-gray-800 font-medium text-center leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridMenu;