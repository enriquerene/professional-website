"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@lib/utils';

type LogoProps = {
  className?: string;
  text?: string;
};

export const Logo: React.FC<LogoProps> = ({
  className,
  text = "Enrique René",
}) => {
  return (
    <Link href="/" className={cn("text-white font-bold text-xl", className)}>
      {text}
    </Link>
  );
};
