import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SocialPresence } from './SocialPresence';

const meta: Meta<typeof SocialPresence> = {
  title: 'UI/Composed/SocialLinksRow',
  component: SocialPresence,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SocialPresence>;

export const Default: Story = {};
