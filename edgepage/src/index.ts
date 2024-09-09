import { Hono } from 'hono';

// Create a new Hono app instance
const app = new Hono();

// Define routes using the Hono app
app.get('/', (c) => c.text('Hello, World!'));

// Define the fetch event listener for the Cloudflare Worker
addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(app.fetch(event.request));
});

