import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TechStack } from './TechStack';

const meta: Meta<typeof TechStack> = {
  title: 'Domain/Home/TechStack',
  component: TechStack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TechStack>;

export const Default: Story = {};
