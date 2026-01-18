"use client";

import React from 'react';
import {SITE_DESCRIPTION, SITE_NAME, SITE_EMAIL, SITE_PHONE, SOCIAL_LINKS, NAV_LINKS} from '@lib/constants';
import Title from "@components/ui/base/Title";
import SocialIconsRow from "@components/ui/composed/SocialIconsRow";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white font-ubuntu">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Title>Enrique René</Title>
            <p className="text-gray-400">
              {SITE_DESCRIPTION}
            </p>
          </div>

          <div>
            <Title>Contact</Title>
            <address className="text-gray-400 not-italic">
              <p>Email: <a target="_blank" href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></p>
              <p>WhatsApp: <a target="_blank" href={`https://wa.me/${SITE_PHONE}`}>+{SITE_PHONE}</a></p>
            </address>
          </div>

          <div>
            <Title>Quick Links</Title>
            <ul className="text-gray-400 space-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start justify-start">
            <Title>Social Media</Title>
            <SocialIconsRow links={SOCIAL_LINKS}/>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
