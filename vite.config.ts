import { gracile } from '@gracile/gracile/plugin';
import { defineConfig } from 'vite';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import { viteMarkdownPlugin } from '@gracile/markdown/vite'; 
import { MarkdownRenderer } from '@gracile/markdown-preset-marked';
import { viteSvgPlugin } from '@gracile/svg/vite'; 
import { viteSitemapPlugin } from '@gracile/sitemap/vite'; 
import tsconfigPaths from 'vite-tsconfig-paths'
import path from "path";


const SITE_URL = `https://${import.meta.env}.evonytkrtips.net`;


export default defineConfig({
			server: {
				port: 3030,
			},
		
			plugins: [
				tsconfigPaths(),
				viteSitemapPlugin({
					siteUrl: SITE_URL,
				}),
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
          '~/templates/*': path.resolve(__dirname, './src/templates/'),
          '~/routes/*': path.resolve(__dirname, './src/routes/'),
          '~/features': path.resolve(__dirname, './src/features/'),
        }
      },
			build: {
        sourcemap: true,
				rollupOptions: {
          input: 'src/index.ts',
          external: [
            './dist/server/entrypoint.js',
          ],
          plugins: [
            typescript(),
            nodeResolve({
              browser: true,
              exportConditions: ['node'],
            })
          ]
				}				
			}
		}	

);
