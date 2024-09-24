import { html } from 'lit';
import { defineRoute } from '@gracile/gracile/route';
import { z } from "zod";
import { createZodFetcher } from "zod-fetch";
import { env } from '@gracile/gracile/env';

import { document } from '~/templates/base';

import { minimalGeneral, lowDetailList } from '~/schemas/generalSchemas';

const generalListFetcher = createZodFetcher();

/// override due to https://github.com/gracile-web/gracile/issues/8
//const baseURL = (env.DEV || env.TEST) ? 'http://localhost' : import.meta.url; 
const baseURL = 'http://localhost';
const generalEndpoint = new URL('/general', baseURL);
generalEndpoint.port = '8080';

const generalListURL = new URL('/general/list?types=true', generalEndpoint);
export const generalList: lowDetailList | void = await generalListFetcher(
  lowDetailList, 
  generalListURL,
).catch((error: Error) => {
  console.error(`fetch of ${generalListURL.toString()} failed`);
  if(env.DEV || env.TEST) {
    console.error(`fetch failed in dev/test environment`);
  }
  console.error(error.message);
});



export default defineRoute({
  document: (context) => document(context),
  
  template: () => html`
  <uL>
    ${generalList && generalList.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }).map((general: minimalGeneral) => {
      const detailsUrl = new URL(`/general/details/${encodeURI(general.name)}`, baseURL);
      return  html`
        <li>
          <link-card 
            title=${general.name} 
            description="A general for leading ${general.type}"
            target=${detailsUrl}
            ></link-card>
        </li>
      `;
    })}
  </ul>
  `,
});