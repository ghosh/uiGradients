const path = require('path')

const aliases = {
  '@': path.resolve('./src')
}

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    config.resolve['alias'] = aliases
    return config
  }
}
