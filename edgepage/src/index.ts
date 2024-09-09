// edgepage/src/index.ts

// Import the necessary types from the Cloudflare Workers environment
import { EventContext } from '@cloudflare/workers-types';

// Define the fetch event listener for the Cloudflare Worker
addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event));
});

// Handle the incoming request and return a response
async function handleRequest(event: FetchEvent): Promise<Response> {
  // Create a response with a "Hello, World!" message
  const response = new Response('Hello, World!', {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });

  return response;
}

