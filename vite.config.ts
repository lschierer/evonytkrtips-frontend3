import { gracile } from '@gracile/gracile/plugin';
import { defineConfig } from 'vite';

import { viteMarkdownPlugin } from '@gracile/markdown/vite';
import { MarkdownRenderer } from '@gracile/markdown-preset-marked';
import { viteSvgPlugin } from '@gracile/svg/vite';
import tsconfigPaths from 'vite-tsconfig-paths'
import path from "path";

import build from '@hono/vite-build/bun';

const SITE_URL = import.meta.env !== undefined ? `https://${import.meta.env.MODE}.evonytkrtips.net` : 'http://localhost:3030';

const viteConfig = defineConfig({
  server: {
    port: 3030,
  },
  plugins: [
    build({
      entry: './src/index.ts',
      outputDir: './dist',
    }),
    tsconfigPaths(),
    viteMarkdownPlugin({ MarkdownRenderer }),
    viteSvgPlugin({
      //SVGO options
    }),
    gracile({
      output: 'server',

      dev: {
        locals: (_context) => {
          return {
            requestId: crypto.randomUUID(),
            userEmail: 'admin@admin.home.arpa',
          };
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '~/components': path.resolve(__dirname, './src/components/'),
      '~/routes/*': path.resolve(__dirname, './src/routes/'),
      '~/styles': path.resolve(__dirname, './src/styles/'),
      '~/templates/*': path.resolve(__dirname, './src/templates/'),
    }
  },
  build: {
    sourcemap: true,
  }
});

export default viteConfig;