const {execSync} = require('child_process')
const logger = require('../logger')
const add = ()=>{
  const commitTag = execSync('node_modules/.bin/webpack --config  ./scripts/webpack.prod.config.js',{
    stdio: 'inherit'
  })
}

module.exports = add