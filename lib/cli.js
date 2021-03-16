#!/usr/bin/env node
const program = require('commander')
const pkg = require('../package')

console.log('hello world 2!!!')
program.version(pkg.version)
  .usage('<command>')

program.parse(process.argv)