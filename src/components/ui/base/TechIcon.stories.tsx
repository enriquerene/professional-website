import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TechIcon } from './TechIcon';

const meta: Meta<typeof TechIcon> = {
  title: 'UI/Base/TechIcon',
  component: TechIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TechIcon>;

export const ReactIcon: Story = {
  args: {
    name: 'react',
    title: 'React',
    className: 'text-4xl text-gray-400',
  },
};

export const LaravelIcon: Story = {
  args: {
    name: 'laravel',
    title: 'Laravel',
    className: 'text-4xl text-gray-400',
  },
};

export const AWSIcon: Story = {
  args: {
    name: 'aws',
    title: 'AWS',
    className: 'text-4xl text-gray-400',
  },
};
