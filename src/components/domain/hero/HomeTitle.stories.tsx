import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { HomeTitle } from './HomeTitle';

const meta: Meta<typeof HomeTitle> = {
  title: 'Domain/Home/HomeTitle',
  component: HomeTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HomeTitle>;

export const Default: Story = {};
