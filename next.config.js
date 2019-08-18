const path = require('path')

module.exports = {
  webpack (config, options) {
    Object.assign(
      // Aliases
      config.resolve.alias, {
        '@lib': path.join(__dirname, 'components/lib'),
        '@modules': path.join(__dirname, 'components/modules'),
        '@features': path.join(__dirname, 'components/features')
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
