const path = require('path')

module.exports = {
  webpack (config, options) {
    Object.assign(
      // Aliases
      config.resolve.alias, {
        '@modules': path.join(__dirname, 'components/modules')
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
