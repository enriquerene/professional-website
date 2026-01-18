import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AvailabilityBadge } from './AvailabilityBadge';

const meta: Meta<typeof AvailabilityBadge> = {
  title: 'UI/Base/AvailabilityBadge',
  component: AvailabilityBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AvailabilityBadge>;

export const Default: Story = {
  args: {
    text: 'Available for US & LATAM Roles',
  },
};

export const CustomText: Story = {
  args: {
    text: 'Open to new projects',
    className: 'bg-green-500/10 border-green-500/20 text-green-400',
  },
};
