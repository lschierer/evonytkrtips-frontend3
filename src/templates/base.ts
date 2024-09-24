import { html } from '@gracile/gracile/server-html';

import { createMetadata } from '@gracile/metadata';


const baseCSSUrl = new URL('./base.css', import.meta.url); 
export const document = (props: { url: URL; title?: string }) => html`
  <!doctype html>
  <html lang="en" dir="ltr" class="spectrum spectrum--medium spectrum--light">
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

    <body class="h-screen bg-spectrum " >
      <sp-theme >  
      <p class="" >test</p>
      <route-template-outlet></route-template-outlet>
    
    </body>
  </html>
`;


