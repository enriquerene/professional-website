"use client";

import React from 'react';
import { cn } from '@lib/utils';
import { SectionProps } from '@/types';

export const Section: React.FC<SectionProps> = ({
  id,
  className,
  children,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
