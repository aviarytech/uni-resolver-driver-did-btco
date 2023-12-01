import { Elysia } from 'elysia'
import { resolve } from 'btc-ordinal-dids';

const app = new Elysia()
  .get('/1.0/identifiers/:identifier', async ({ params: { identifier } }) => {
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
  })
  .listen(8080)

console.log(`⌾ did:btco resolver is running on port ${app.server?.port} ⌾`)
