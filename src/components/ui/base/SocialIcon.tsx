"use client";

import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaMedium,
  FaWhatsapp,
  FaCalendar,
  FaStackOverflow,
  FaFilePdf,
  FaDribbble
} from 'react-icons/fa';
import { SocialIconName } from '@/types';
import { cn } from '@lib/utils';

export type SocialIconProps = {
  href: string;
  iconName: SocialIconName;
  label: string;
  className?: string;
};

export const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  iconName,
  label,
  className = '',
}) => {
  // Map icon name to component
  const getIcon = (name: SocialIconProps['iconName']): React.ReactNode => {
    const iconClassName = 'w-5 h-5';
    const available = {
      'github': FaGithub,
      'linkedin': FaLinkedin,
      'twitter': FaTwitter,
      'medium': FaMedium,
      'whatsapp': FaWhatsapp,
      'calendar': FaCalendar,
      'stackoverflow': FaStackOverflow,
      'file-pdf': FaFilePdf,
      'dribbble': FaDribbble,
    }
    const Icon = available[name];
    if (!Icon) return null;
    return <Icon className={iconClassName} />;
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 bg-opacity-20 hover:bg-opacity-30 text-white transition-colors duration-200',
        className
      )}
      aria-label={label}
    >
      {getIcon(iconName)}
    </a>
  );
};
