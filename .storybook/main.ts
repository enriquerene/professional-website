import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: { stories: string[]; addons: string[]; framework: string; staticDirs: string[] } = {
  "stories": [
    "../src/components/*.mdx",
    "../src/components/ui/base/**/*.stories.@(tsx)",
    "../src/components/ui/composed/**/*.stories.@(tsx)",
    "../src/components/layout/base/**/*.stories.@(tsx)",
    "../src/components/layout/composed/**/*.stories.@(tsx)",
    "../src/components/layout/templates/**/*.stories.@(tsx)",
    "../src/components/domain/**/*.stories.@(tsx)",
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/nextjs-vite",
  "staticDirs": [
    "../public"
  ]
};
export default config;