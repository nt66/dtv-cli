const {execSync,exec} = require('child_process')
const logger = require('../logger')
const server = ()=>{
  const commitTag = execSync('node_modules/.bin/webpack-dev-server  --config ./scripts/webpack.dev.config.js',{
    stdio: 'inherit'
  })
}

module.exports = server