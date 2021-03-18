const {execSync} = require('child_process')
const deploy = ()=>{
  const commitTag = execSync('npm publish',{
    stdio: 'inherit'
  })
}
module.exports = deploy