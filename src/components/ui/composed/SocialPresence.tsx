"use client";

import React from 'react';
import { SOCIAL_LINKS } from '@lib/constants';
import SocialIconsRow from "@components/ui/composed/SocialIconsRow";
import Title from "@components/ui/base/Title";

export const SocialPresence: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:items-end">
      <Title>Professional Presence</Title>
      <SocialIconsRow links={SOCIAL_LINKS} />
    </div>
  );
};
