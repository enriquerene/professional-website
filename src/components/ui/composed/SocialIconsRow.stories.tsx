import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SocialIconsRow from './SocialIconsRow';
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '@lib/constants';

const meta: Meta<typeof SocialIconsRow> = {
  title: 'UI/Composed/SocialIconsRow',
  component: SocialIconsRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SocialIconsRow>;

export const Default: Story = {
  args: {
    links: [
      { href: GITHUB_URL, iconName: 'github', label: 'GitHub' },
      { href: TWITTER_URL, iconName: 'twitter', label: 'Twitter' },
      { href: LINKEDIN_URL, iconName: 'linkedin', label: 'LinkedIn' },
    ],
  },
};

export const SingleIcon: Story = {
  args: {
    links: [
      { href: GITHUB_URL, iconName: 'github', label: 'GitHub' },
    ],
  },
};
