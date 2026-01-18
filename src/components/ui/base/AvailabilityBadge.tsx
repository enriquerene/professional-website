"use client";

import React from 'react';
import { cn } from '@lib/utils';

type AvailabilityBadgeProps = {
  className?: string;
  text?: string;
};

export const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({
  className,
  text = "Available for US & LATAM Roles",
}) => {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-pulse",
      className
    )}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
      </span>
      {text}
    </div>
  );
};
