/**
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

const slugged = slugify(Gradients)
const colorized = colorify(slugged.gradients)
const classified = classify(colorized)

// console.log(colorized);

ensureDirectoryExists('./stubs/')

writeToFile('gradients', colorized)
writeToFile('slugs', slugged.slugs)
writeToFile('cyans', classified.cyans)
writeToFile('reds', classified.reds)
writeToFile('oranges', classified.oranges)
writeToFile('yellows', classified.yellows)
writeToFile('greens', classified.greens)
writeToFile('blues', classified.blues)
writeToFile('magentas', classified.magentas)
writeToFile('blacks', classified.blacks)
writeToFile('whites', classified.whites)
writeToFile('grays', classified.grays)