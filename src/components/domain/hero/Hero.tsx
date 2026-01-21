"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '../../ui/base/Button';
import { AvailabilityBadge } from '../../ui/base/AvailabilityBadge';
import { HomeTitle } from './HomeTitle';
import { TechStack } from './TechStack';
import { SocialPresence } from '../../ui/composed/SocialPresence';
import {
  RESUME_URL,
  WHATSAPP_URL
} from '@lib/constants';
import styled from "styled-components";

const HeroContainer = styled.div`
  position: relative;
  background-color: #000;
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(0, 120, 215, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(231, 76, 60, 0.05) 0%, transparent 30%),
    radial-gradient(circle at 20% 80%, rgba(233, 30, 99, 0.05) 0%, transparent 30%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(circle at center, black, transparent 80%);
    pointer-events: none;
  }
`

const Hero: React.FC = () => {
  return (
    <HeroContainer className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white font-ubuntu">
        <AvailabilityBadge />

        <HomeTitle />

        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-400 leading-relaxed">
          Senior Full Stack Engineer with a background in <span className="text-white font-semibold">Physics</span>. I build scalable <span className="text-white font-semibold">E-commerce</span> solutions using <span className="text-blue-400 font-semibold">Modern WordPress</span>, <span className="text-blue-400 font-semibold">Laravel</span>, and <span className="text-blue-400 font-semibold">React</span>.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          <Button href={WHATSAPP_URL}>
            <FaWhatsapp className="mr-3 h-5" />
            Chat with me right now
          </Button>
          <Button href={RESUME_URL} variant="secondary">
            Download Resume (PDF)
          </Button>
        </div>

        {/* Expertise & Social */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <TechStack />
          <SocialPresence />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;