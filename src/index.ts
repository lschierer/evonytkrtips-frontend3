import { Hono } from 'hono';
import { logger } from 'hono/logger'
import { serve, type Http2Bindings } from '@hono/node-server';
/*
 *https://github.com/oven-sh/bun/issues/8823
 *import { createServer } from 'node:http2'
 */
import * as gracile from '@gracile/gracile/hono';

import backendController from './controllers/backend';


const app = new Hono<{ 
	Variables: Gracile.Locals,
	/*
	 *https://github.com/oven-sh/bun/issues/8823
	 *Bindings: Http2Bindings
	 */
}>();

app.use(logger());

app.route('/backend', backendController);

//import gracileController from './controllers/gracile';
//app.route('/frontend', gracileController);

export const server = serve({ 
		fetch: app.fetch,
		hostname: gracile.server.LOCALHOST,
		/*
		 *https://github.com/oven-sh/bun/issues/8823
	   *createServer,
		 */
	},
);

export default server;
/*
export default {
	fetch: app.fetch, 
}
*/