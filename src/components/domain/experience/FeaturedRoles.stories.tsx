import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FeaturedRoles } from './FeaturedRoles';

const meta: Meta<typeof FeaturedRoles> = {
  title: 'Domain/Experience/FeaturedRoles',
  component: FeaturedRoles,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeaturedRoles>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="bg-black p-8 min-h-screen">
        <Story />
      </div>
    ),
  ],
};
