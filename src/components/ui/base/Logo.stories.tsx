import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'UI/Base/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    text: 'Enrique René',
  },
};

export const CustomText: Story = {
  args: {
    text: 'Portfolio',
    className: 'text-2xl text-blue-400',
  },
};
