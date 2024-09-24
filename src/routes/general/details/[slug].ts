import { defineRoute } from '@gracile/gracile/route';
import { html } from 'lit';

import { document } from '~/templates/base';
import { minimalGeneral, lowDetailList } from '~/schemas/generalSchemas';


import { generalList } from './(details)';



const mapGenerals = () => {
  const allGenerals: minimalGeneral[] = new Array<minimalGeneral>();
  if(generalList){
    generalList.map((general: minimalGeneral) => {
      allGenerals.push(general);
    })
  } 
  return allGenerals;
}

export default defineRoute({
  handler: {
    POST: async (context) => {
      let name = context.url.pathname.split('/').pop() ?? '';
      if(name.length) {

      }
      else {
        return new Response('Not Found', {status: 404 });
      }

    }
  }
    
});