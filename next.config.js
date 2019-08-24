const path = require('path')
require('dotenv').config()

module.exports = {
  // Env Variables
  // Will be available on both server and client
  publicRuntimeConfig: {
    'FIREBASE_API_KEY': process.env.FIREBASE_API_KEY,
    'FIREBASE_AUTH_DOMAIN': process.env.FIREBASE_AUTH_DOMAIN,
    'FIREBASE_DATABASE_URL': process.env.FIREBASE_DATABASE_URL,
    'FIREBASE_PROJECT_ID': process.env.FIREBASE_PROJECT_ID,
    'FIREBASE_STORAGE_BUCKET': process.env.FIREBASE_STORAGE_BUCKET,
    'FIREBASE_MESSAGING_SENDER_ID': process.env.FIREBASE_MESSAGING_SENDER_ID,
    'FIREBASE_APP_ID': process.env.FIREBASE_APP_ID
  },
  // Webpack
  webpack (config, options) {
    Object.assign(
      // Aliases
      config.resolve.alias, {
        '@lib': path.join(__dirname, 'components/lib'),
        '@modules': path.join(__dirname, 'components/modules'),
        '@features': path.join(__dirname, 'components/features'),
        // '@firebase': path.join(__dirname, 'firebase'),
        '@providers': path.join(__dirname, 'providers')
      }
    )
    // Rules
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    })
    return config
  }
}
