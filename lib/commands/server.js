const {execSync,exec} = require('child_process')
const logger = require('../logger')
const server = ()=>{
  const commitTag = execSync('npx webpack-dev-server --config ./scripts/webpack.dev.config.js').toString().trim()
    logger.minfo(`set commitTag = ${commitTag}`)
    logger.minfo('finish dev image')
    return commitTag;
}

module.exports = server