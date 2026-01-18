import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TechIconsRow } from './TechIconsRow';

const meta: Meta<typeof TechIconsRow> = {
  title: 'UI/Composed/TechIconsRow',
  component: TechIconsRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TechIconsRow>;

export const Default: Story = {
  args: {
    techs: [
      { name: 'figma', title: 'Figma' },
      { name: 'react', title: 'React' },
      { name: 'wordpress', title: 'WordPress' },
      { name: 'php', title: 'PHP' },
      { name: 'laravel', title: 'Laravel' },
      { name: 'database', title: 'Databases' },
      { name: 'aws', title: 'AWS' },
    ],
  },
};

export const SmallSet: Story = {
  args: {
    techs: [
      { name: 'react', title: 'React' },
      { name: 'laravel', title: 'Laravel' },
    ],
  },
};
