import { html } from '@gracile/gracile/server-html';
import { createMetadata } from '@gracile/metadata';

export const document = (props: { url: URL; title?: string | null }) => html`
	<!doctype html>
	<html lang="en">
		<head>
		${createMetadata({
        siteTitle: 'Evony TKR Tips',
        pageTitle: `${props.title ?? 'Untitled'}`,
        ogTitle: props.title ?? 'Untitled',
        pageDescription: 'The description…',
        // ...
      })}
			<!-- Basics -->
			
			<!-- Global assets -->
			<link rel="stylesheet" href="/src/document.css" />
			<script
				type="module"
				src=${new URL('./document.client.ts', import.meta.url).pathname}
			></script>

			<!-- SEO and page metadata -->
			<title>${props.title}</title>
			<link type="image/svg+xml" href="/favicon.svg" rel="icon" />
		</head>

		<body>
			<route-template-outlet></route-template-outlet>
		</body>
	</html>
`;
