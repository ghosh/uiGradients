var fs = require('fs')
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

const slugger = function (str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  var to = "aaaaaeeeeeiiiiooooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};


const Slugs = []

Gradients.forEach((gradient) => {
  gradient = Object.assign(gradient, { 'slug': slugger(gradient.name) })
  Slugs.push(gradient.slug)
})

ensureDirectoryExists('./stubs/')

writeToFile('gradients', Gradients)
writeToFile('slugs', Slugs)