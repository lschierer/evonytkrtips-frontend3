import type { Config } from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography';


export default {
  content: ['./src/**/*.{js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindTypography()
  ],
} satisfies Config

