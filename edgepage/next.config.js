// edgepage/next.config.js

module.exports = {
  // Set the target to 'serverless' to optimize for serverless deployment
  target: 'serverless',

  // Additional configurations can be added here if needed
  // For example, enabling experimental features or plugins

  // Example: Enabling Webpack 5
  future: {
    webpack5: true,
  },

  // Example: Custom Webpack configuration
  webpack: (config, { isServer }) => {
    // Modify the config as needed
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Example: Mock 'fs' module for client-side
      };
    }
    return config;
  },
};

