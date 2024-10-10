import { Hono } from 'hono';
import { logger } from 'hono/logger'

import * as gracile from '@gracile/gracile/hono';

const app = new Hono<{ 
	Variables: Gracile.Locals,
}>();

app.use(logger());
// @ts-expect-error
import { handler } from './dist/server/entrypoint.js';

//fall back to using the gracile frontend
app.get('*').use(async (c, next) => {
  if(import.meta.env.DEV) {
    c.set('requestId', crypto.randomUUID());
    c.set('userEmail', c.req.header('x-forwarded-email') || 'null@0.home.arpa');	
  }
  return next();
})
.use(gracile.honoAdapter(handler));


export default app;
