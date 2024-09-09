# Edgepage

Edgepage is a Next.js application designed to be hosted on Cloudflare Pages. This project leverages the power of serverless architecture to deliver fast and scalable web applications.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (>=12.0) and npm installed on your machine.
- Wrangler CLI installed globally. You can install it using npm:
  ```bash
  npm install -g @cloudflare/wrangler
  ```

## Getting Started

To get a local copy up and running, follow these steps:

### Installation

1. Navigate to the `edgepage` directory:
   ```bash
   cd edgepage
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application Locally

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start the Next.js development server. Open your browser and navigate to `http://localhost:3000` to view the application.

### Building the Application

To build the application for production, run:

```bash
npm run build
```

This will compile the TypeScript files and create an optimized production build in the `.next` directory.

### Running the Cloudflare Worker Locally with Hono

To run the Cloudflare Worker locally using Hono, use the following command:

```bash
npm run build
```

This will compile the TypeScript files and start the Cloudflare Worker using Hono. You can then use a tool like `miniflare` to simulate the worker environment locally. Install `miniflare` globally if you haven't already:

```bash
npm install -g miniflare
```

Then, run the worker locally:

```bash
miniflare lib/index.js
```

Open your browser and navigate to `http://localhost:8787` to view the application.

## Deploying the Cloudflare Worker

To deploy the Cloudflare Worker, follow these steps:

1. Ensure you have built the project using the build command:
   ```bash
   npm run build
   ```

2. Ensure you are logged in to your Cloudflare account using Wrangler:
   ```bash
   wrangler login
   ```

3. Publish the application using Wrangler:
   ```bash
   wrangler publish
   ```

This command will deploy your application to Cloudflare Pages, making it accessible via your configured domain.

## Deployment

To deploy the application to Cloudflare Pages, follow these steps:

1. Ensure you are logged in to your Cloudflare account using Wrangler:
   ```bash
   wrangler login
   ```

2. Publish the application using Wrangler:
   ```bash
   wrangler publish
   ```

This command will deploy your application to Cloudflare Pages, making it accessible via your configured domain.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/cli-wrangler)

