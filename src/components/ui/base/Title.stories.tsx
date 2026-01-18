import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Title from './Title';

const meta: Meta<typeof Title> = {
  title: 'UI/Base/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: 'Technology Stack',
  },
};

export const LongTitle: Story = {
  args: {
    children: 'Professional Experience & Career Path',
  },
};
