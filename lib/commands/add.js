const { execSync } = require('child_process')
const fs = require('fs');
const path = require("path");
const logger = require('../logger');

const basePath = 'lib/template/';
let temps = [`${basePath}index.tsx`, `${basePath}index.less`, `${basePath}draw.ts`, `${basePath}data.d.ts`];
const writePath = 'src';

const add = (cmd) => {
  // 创建 tsx 模板文件
  // 创建 less 文件
  // 创建 data.d 文件
  const { n:name } = cmd;
  if (!fs.existsSync(writePath)){
    fs.mkdirSync(writePath);
  }
  if (!fs.existsSync(`${writePath}/${name}`)) {
    fs.mkdirSync(`${writePath}/${name}`);
    for(let file of temps ){
      const fileStream = fs.readFileSync(file);
      const fileName = path.basename(file);
      fs.writeFileSync(`${writePath}/${name}/${fileName}`, fileStream);
    } 
  } else {
    logger.merror(`file ${name} already exist!`)
  } 
}
module.exports = add