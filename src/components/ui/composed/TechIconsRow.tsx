"use client";

import React from 'react';
import { TechIcon, TechIconProps } from '@components/ui/base/TechIcon';

export type TechIconsRowProps = {
  techs: TechIconProps[];
  className?: string;
};

export const TechIconsRow: React.FC<TechIconsRowProps> = ({ techs, className = '' }) => {
  return (
    <div className={`flex gap-6 text-2xl text-gray-400 ${className}`}>
      {techs.map((tech) => (
        <TechIcon
          key={tech.name}
          name={tech.name}
          title={tech.title}
          className={tech.className}
        />
      ))}
    </div>
  );
};
