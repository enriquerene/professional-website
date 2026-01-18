import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SocialIcon } from './SocialIcon';

const meta: Meta<typeof SocialIcon> = {
  title: 'UI/Base/SocialIcon',
  component: SocialIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SocialIcon>;

export const Github: Story = {
  args: {
    iconName: 'github',
    href: 'https://github.com',
    label: 'GitHub',
  },
};

export const Linkedin: Story = {
  args: {
    iconName: 'linkedin',
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
};

export const Whatsapp: Story = {
  args: {
    iconName: 'whatsapp',
    href: 'https://wa.me/123',
    label: 'WhatsApp',
  },
};

export const CustomClass: Story = {
  args: {
    iconName: 'twitter',
    href: 'https://twitter.com',
    label: 'Twitter',
    className: 'bg-blue-500 hover:bg-blue-600',
  },
};
