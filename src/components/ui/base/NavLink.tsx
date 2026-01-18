"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@lib/utils';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-gray-300 hover:text-white transition-colors duration-200",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
