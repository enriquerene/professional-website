import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MobileMenu } from './MobileMenu';

const meta: Meta<typeof MobileMenu> = {
  title: 'UI/Composed/MobileMenu',
  component: MobileMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MobileMenu>;

const navigation = [
  { name: 'Experience', href: '#featured-roles' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Skills', href: '#skills' },
  { name: 'Professional', href: '#professional' },
  { name: 'Contact', href: '#contact' },
];

export const Open: Story = {
  args: {
    isOpen: true,
    navigation: navigation,
    onClose: () => console.log('Close clicked'),
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    navigation: navigation,
    onClose: () => console.log('Close clicked'),
  },
};
