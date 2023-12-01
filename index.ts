import { Elysia } from 'elysia'
// @ts-ignore
import { resolve } from 'btc-ordinal-dids';

const app = new Elysia()
  .get('/1.0/identifiers/:identifier', async ({ params: { identifier } }) => {
    try {
      const did = await resolve(identifier, {network: 'signet'});
      if (did.didDocument) {
        console.log(`Resolved ${did.didDocument.id}`);
        return new Response(JSON.stringify(did, null, 2), {
          headers: {
              'Content-Type': 'application/json'
          }
        });
      }
      return new Response('Not Found', {status: 404});
    } catch (e: any) {
      console.error(e.message)
      return new Response('Internal Server Error', {status: 500});
    }
  })
  .listen(Bun.env.PORT || 8080)

console.log(`⌾ ⌾ ⌾ did:btco resolver is running on port ${app.server?.port} ⌾ ⌾ ⌾`)
