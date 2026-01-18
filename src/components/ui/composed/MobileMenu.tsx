"use client";

import React from 'react';
import { cn } from '@lib/utils';
import { NavLink } from '../base/NavLink';
import { NavLink as NavLinkType } from '@/types';

type MobileMenuProps = {
  isOpen: boolean;
  navigation: NavLinkType[];
  onClose: () => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  navigation,
  onClose,
}) => {
  return (
    <div
      className={cn(
        'md:hidden bg-gray-900 bg-opacity-95 absolute w-full transition-all duration-300 ease-in-out',
        isOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
      )}
    >
      <nav className="container mx-auto px-4">
        <ul className="space-y-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                href={item.href}
                className="block"
                onClick={onClose}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
