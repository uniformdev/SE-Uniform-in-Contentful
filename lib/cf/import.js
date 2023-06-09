#!/usr/bin/env node
const contentfulImport = require('contentful-import')
const dotenv = require('dotenv')
dotenv.config()

var argv = require('yargs/yargs')(process.argv.slice(2))
  .boolean(['f'])
  .argv;

const options = {
  assetsDirectory: './lib/cf',
  contentFile: argv.f ? './lib/cf/data-finished.json' : './lib/cf/data.json',
  managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  spaceId: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  uploadAssets: true,
}

contentfulImport(options)
  .then(() => {
    console.log('Data imported successfully')
  })
  .catch((err) => {
    console.log('Oh no! Some errors occurred!', err)
  })
