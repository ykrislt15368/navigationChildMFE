/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, option){
    const mfeConfig = new NextFederationPlugin({
      name: 'navigation-app',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        './navigation': './src/pages/index'
      }
    });
    config.plugins.push(mfeConfig);
    return config;
  }
}

module.exports = nextConfig
