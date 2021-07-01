/**
 * Handles logistics
 * Writes relevant gradients to files
 * in the stubs folder
 */

const fs = require('fs')
const slugify = require('./slugify')
const colorify = require('./colorify')
const classify = require('./classify')
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

const copyFile = (fileName) => {
  fs.copyFile(`./stubs/${fileName}.json`, `./api/public/json/${fileName}.json`, (err) => {
    if (err) console.log(err)
  })
}

const slugged = slugify(Gradients)
const colorized = colorify(slugged.gradients)
const classified = classify(colorized)

ensureDirectoryExists('./stubs/')
ensureDirectoryExists('./api/public/json/')

writeToFile('gradients', colorized)
writeToFile('slugs', slugged.slugs)


/**
 * Generates a file for each color bucket
 * and copies to api public folder
 */
const colors = ['cyans', 'reds', 'oranges', 'yellows', 'greens', 'blues', 'magentas', 'blacks', 'whites', 'grays']
colors.forEach(color => {
  writeToFile(color, classified[color])
  copyFile(color)
})

fs.copyFile(`./stubs/gradients.json`, `./api/public/json/all.json`, (err) => {
  if (err) console.log(err)
})