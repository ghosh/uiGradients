/**
 * Writes relevant gradients to files
 * in the stubs folder
 */

const fs = require('fs')
const slugify = require('./slugify')
const colorify = require('./colorify')
var Gradients = require('../gradients.json')

const ensureDirectoryExists = (dirname) => {
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname);
  }
}

const writeToFile = (fileName, content) => {
  try {
    fs.writeFileSync(`./stubs/${fileName}.json`, JSON.stringify(content))
    console.log(`✅ Create ${fileName} file`)
  } catch (err) {
    console.log(`❌ Failed to write ${fileName} file`);
    console.error(err)
  }
}

const sluggedGradients = slugify(Gradients)
const colorizedGradients = colorify(sluggedGradients.gradients)

ensureDirectoryExists('./stubs/')

writeToFile('gradients', colorizedGradients)
writeToFile('slugs', sluggedGradients.slugs)