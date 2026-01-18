import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Layout/Composed/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-[200px] bg-gray-900">
        <Story />
      </div>
    ),
  ],
};
