import { gracile } from '@gracile/gracile/plugin';
import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import postcssNested from 'postcss-nested'
import path from 'path';

export default defineConfig({
	server: {
		port: 3030,
	},
  preview: { 
    port: 3030 
  },
  build: {
    
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '~/styles': path.resolve(__dirname, './src/styles'),
    },
  },
	plugins: [
		gracile({
			output: 'static',
		}),
	],
});
