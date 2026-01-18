"use client";

import React from 'react';
import Title from "@components/ui/base/Title";
import { TechIconsRow } from "@components/ui/composed/TechIconsRow";
import { TechIconProps } from "@components/ui/base/TechIcon";

const techs: TechIconProps[] = [
  { name: 'figma', title: 'Figma' },
  { name: 'react', title: 'React' },
  { name: 'wordpress', title: 'WordPress' },
  { name: 'php', title: 'PHP' },
  { name: 'laravel', title: 'Laravel' },
  { name: 'database', title: 'Databases' },
  { name: 'aws', title: 'AWS' },
];

export const TechStack: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <Title>Technology Stack</Title>
      <TechIconsRow techs={techs} />
    </div>
  );
};
