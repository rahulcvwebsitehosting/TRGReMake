import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface GridMenuItem {
  id: number;
  label: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export interface FeatureCardItem {
  id: number;
  title: string;
  bgColor: string; // Gradient class
  icon: React.ReactNode; // Can be a custom SVG or Lucide Icon
  textColor: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
}