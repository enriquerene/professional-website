import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NavLink } from './NavLink';

const meta: Meta<typeof NavLink> = {
  title: 'UI/Base/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    children: 'Experience',
    href: '#experience',
  },
};

export const CustomClass: Story = {
  args: {
    children: 'Skills',
    href: '#skills',
    className: 'text-blue-400 font-bold',
  },
};
