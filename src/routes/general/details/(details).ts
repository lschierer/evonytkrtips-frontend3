import { html } from 'lit';
import { defineRoute } from '@gracile/gracile/route';

import { document } from '~/templates/base';

export default defineRoute({
  document: (context) => document(context),

  template: () => html`
    
  `,
});