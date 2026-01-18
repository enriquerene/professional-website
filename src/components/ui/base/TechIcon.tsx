"use client";

import React from 'react';
import { FaReact, FaFigma, FaLaravel, FaPhp, FaDatabase, FaAws, FaWordpress } from 'react-icons/fa';
import { cn } from '@lib/utils';

export type TechIconName = 'figma' | 'react' | 'wordpress' | 'php' | 'laravel' | 'database' | 'aws';

export type TechIconProps = {
  name: TechIconName;
  title: string;
  className?: string;
};

const iconMap = {
  figma: { icon: FaFigma, hoverColor: 'hover:text-yellow-400' },
  react: { icon: FaReact, hoverColor: 'hover:text-blue-400' },
  wordpress: { icon: FaWordpress, hoverColor: 'hover:text-[#21759b]' },
  php: { icon: FaPhp, hoverColor: 'hover:text-purple-400' },
  laravel: { icon: FaLaravel, hoverColor: 'hover:text-red-500' },
  database: { icon: FaDatabase, hoverColor: 'hover:text-blue-500' },
  aws: { icon: FaAws, hoverColor: 'hover:text-orange-400' },
};

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  title,
  className = '',
}) => {
  const { icon: Icon, hoverColor } = iconMap[name] || {};

  if (!Icon) return null;

  return (
    <Icon 
      title={title} 
      className={cn("transition-colors", hoverColor, className)} 
    />
  );
};
