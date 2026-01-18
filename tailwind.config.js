/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['var(--font-ubuntu)', 'sans-serif'],
      },
      colors: {
        blue: {
          DEFAULT: '#0078D7',
        },
        red: {
          DEFAULT: '#E74C3C',
        },
        pink: {
          DEFAULT: '#E91E63',
        }
      },
    },
  },
  plugins: [],
};
