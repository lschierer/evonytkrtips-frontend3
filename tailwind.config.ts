import type { Config } from 'tailwindcss';
import type { PluginUtils } from 'tailwindcss/types/config';

export default {
  darkMode: 'selector',
  content: ["src/**/*.{ts,html,css,scss}"],
  theme: {
    backgroundColor: ({theme}) => ({
      spectrum: 'var(--spectrum-background-base-color)',
      ...theme('colors'),
    }),
    extend: {},
  },
  plugins: [],
} satisfies Config;

