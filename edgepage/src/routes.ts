import { Hono } from 'hono';

// Define a function to set up routes for the Hono app
export function setupRoutes(app: Hono) {
  // Define a route for the root path
  app.get('/', (c) => c.text('Welcome to the Edge Page!'));

  // Define additional routes as needed
  app.get('/about', (c) => c.text('This is the about page.'));
  app.get('/contact', (c) => c.text('Contact us at contact@example.com.'));
}

