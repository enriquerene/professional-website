import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Section } from './Section';
import React from 'react';

const meta: Meta<typeof Section> = {
  title: 'Layout/Base/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    id: 'test-section',
    children: (
      <div className="bg-blue-900/20 p-8 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-4">Section Content</h2>
        <p>This is a standard section with some content inside.</p>
      </div>
    ),
  },
};

export const Dark: Story = {
  args: {
    id: 'dark-section',
    className: 'bg-black text-white',
    children: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Dark Section</h2>
        <p>Sections can have custom background colors via className.</p>
      </div>
    ),
  },
};
