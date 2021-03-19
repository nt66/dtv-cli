/*
* @desc 递归创建项目文件
*/
const fs = require('fs')
const path = require("path")
const logger = require('../logger')
const basePath = path.join(__dirname, '../../appTemplate')
const writePath = '.'

const init = () => {
  const copy = function (src, dst) {
    let paths = fs.readdirSync(src) //同步读取当前目录
    // console.log('paths',paths)
    paths.forEach(function (path) {
      let _src = src + '/' + path
      let _dst = dst + '/' + path
      fs.stat(_src, function (err, stats) { //stats 该对象 包含文件属性
        if (err) throw err
        if (stats.isFile()) { // 是文件 拷贝
          let readable = fs.createReadStream(_src) // 创建读取流
          let writable = fs.createWriteStream(_dst) // 创建写入流
          readable.pipe(writable)
          logger.minfo(`create ${writable.path} success`)
        } else if (stats.isDirectory()) { //是目录则 递归创建
          checkDirectory(_src, _dst, copy)
        }
      })
    })
  }

  const checkDirectory = function (src, dst, callback) {
    fs.access(dst, fs.constants.F_OK, (err) => {
      if (err) {
        fs.mkdirSync(dst)
        callback(src, dst)
      } else {
        callback(src, dst)
      }
    })
  }

  checkDirectory(basePath, writePath, copy)
}

module.exports = init