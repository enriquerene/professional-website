// import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'
import { ThemeProvider } from '../src/providers/ThemeProvider'
import React from 'react'

const preview: {
  parameters: {
    backgrounds: { default: string; values: { name: string; value: string }[] };
    controls: { matchers: { color: RegExp; date: RegExp } };
    a11y: { test: string }
  };
  decorators: ((Story) => React.FunctionComponentElement<{ children: React.ReactNode }>)[]
} = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
      ],
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    (Story) => React.createElement(ThemeProvider, null, React.createElement(Story))
  ],
};

export default preview;