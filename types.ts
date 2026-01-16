
import React from 'react';

export interface MenuCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  colorClass: string;
  delayClass?: string;
}

export interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColorClass: string;
}