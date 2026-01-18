import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './Button';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const meta: Meta<typeof Button> = {
  title: 'UI/Base/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    href: '#',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    href: '#',
    variant: 'secondary',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <FaWhatsapp className="mr-3 h-5" />
        Chat with me
      </>
    ),
    href: '#',
    variant: 'primary',
  },
};

export const ExternalLink: Story = {
  args: {
    children: 'Visit Google',
    href: 'https://google.com',
    external: true,
  },
};
