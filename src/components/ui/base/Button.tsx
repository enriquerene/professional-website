"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@lib/utils';

type ButtonProps = {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  children,
  className = '',
  external = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:scale-105 active:scale-95';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-500 shadow-lg shadow-blue-600/25',
    secondary: 'bg-transparent text-white border border-white/20 hover:bg-white/10 focus:ring-gray-500 backdrop-blur-sm',
  };
  
  const buttonClasses = cn(baseStyles, variantStyles[variant], className);
  
  // Automatically detect external links (starting with http or https)
  const isExternal = external || href.startsWith('http');
  const linkProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' } 
    : {};
  
  return (
    <Link 
      href={href} 
      className={buttonClasses}
      {...linkProps}
    >
      {children}
    </Link>
  );
};
