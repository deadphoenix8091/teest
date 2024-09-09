// edgepage/api/hello.ts

import { Hono } from 'hono';

// Create a new instance of the Hono app
const app = new Hono();

// Define a route that responds with "Hello World"
app.get('/', (c) => c.text('Hello World'));

// Export the app as the default export
export default app;

