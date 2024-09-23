import { gracile } from '@gracile/gracile/plugin';
import { defineConfig } from 'vite';
import { viteMarkdownPlugin } from '@gracile/markdown/vite'; 
import { MarkdownRenderer } from '@gracile/markdown-preset-marked';
import { viteSvgPlugin } from '@gracile/svg/vite'; 
import { viteSitemapPlugin } from '@gracile/sitemap/vite'; 
import tsconfigPaths from 'vite-tsconfig-paths'

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
			build: {
				rollupOptions: {
					input: {
						SpectrumCSSLight: 'node_modules/@spectrum-css/tokens/dist/css/light-vars.css',
						SpectrumCSSDark: 'node_modules/@spectrum-css/tokens/dist/css/dark-vars.css',
						SpectrumWebLight: 'node_modules/@spectrum-web-components/theme/theme-light.js',
						SpectrumWebDark: 'node_modules/@spectrum-web-components/theme/theme-Dark.js',
					}
				}				
			}
		}	

);
