import { Hono } from 'hono';
import { logger } from 'hono/logger'
import { type Http2Bindings } from '@hono/node-server';


const app = new Hono<{ 
	Variables: Gracile.Locals,
	Bindings: Http2Bindings
}>();

app.use(logger());

app.get('/backend', (c) => {
	console.log(`backend middleware`);
	return c.json({"title": "Backend root"});
});

app.get('/backend/*', (c) => {
	console.log(`backend middleware`);
	return c.json({"title": "Backend Handler"});
});


export default app;

