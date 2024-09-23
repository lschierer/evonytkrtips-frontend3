import { html } from '@gracile/gracile/server-html';

import { createMetadata } from '@gracile/metadata';


const baseCSSUrl = new URL('./base.css', import.meta.url); 
export const document = (props: { url: URL; title?: string }) => html`
  <!doctype html>
  <html lang="en" >
    <head>
      <!-- SEO -->
      ${createMetadata({
        siteTitle: 'Evony TKR Tips',
        pageTitle: `My Page | ${props.title ?? 'Untitled'}`,
        ogTitle: props.title,
        // ...
      })}

      <link rel="stylesheet" href=${new URL('base.css', import.meta.url).pathname} />

      <script
				type="module"
				src=${new URL('./base.client.ts', import.meta.url).pathname}
			></script>
      
    </head>

    <body class="spectrum spectrum--medium spectrum--light" >
      <p>test</p>
      <route-template-outlet></route-template-outlet>
    </body>
  </html>
`;


