"use client";

import React from 'react';
import { FEATURED_ROLES } from '@lib/roles';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

export const FeaturedRoles: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Featured Experience</h2>
      <div className="space-y-12">
        {FEATURED_ROLES.map((role) => (
          <div 
            key={role.id} 
            className="group relative bg-gray-800/50 rounded-2xl border border-gray-700 p-8 md:p-10 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <FaBriefcase className="text-sm" />
                  <span className="text-sm font-semibold uppercase tracking-wider">{role.company}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{role.title}</h3>
                <div className="flex items-center gap-2 text-gray-400">
                  <FaCalendarAlt className="text-sm" />
                  <span className="text-sm">{role.period}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end max-w-md">
                {role.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-blue-900/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-blue-200 font-semibold mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Overview
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base italic">
                  &ldquo;{role.brief}&rdquo;
                </p>
              </div>
              <div>
                <h4 className="text-blue-200 font-semibold mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Key Contributions
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {role.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
