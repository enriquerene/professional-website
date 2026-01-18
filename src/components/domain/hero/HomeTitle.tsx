"use client";

import React from 'react';

export const DevRole: React.FC = () => {
  return (
    <div className="pt-2 text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] text-gray-400 uppercase">
      <span className="text-white font-medium">Full Stack</span> UX Engineer
    </div>
  );
};

export const DevName: React.FC = () => (
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-400 pb-2">
    ENRIQUE RENÉ
  </span>
);

export const HomeTitle: React.FC = () => {
  return (
    <h1 className="text-center text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-8 font-ubuntu leading-none">
      <DevName />
      <DevRole />
    </h1>
  );
};