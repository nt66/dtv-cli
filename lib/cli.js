#!/usr/bin/env node
const program = require('commander')
const { init, server, build, add, deploy } = require('./commands')
const pkg = require('../package')
const logger = require('./logger')

program.version(pkg.version)
  .usage('<command>')

program.command('init')
  .alias('i')
  .description('init project')
  .action(init)

program.command('server')
  .alias('s')
  .description('dev page start')
  .action(server)

program.command('build')
  .alias('b')
  .description('build project')
  .action(build)

program.command('new')
  .alias('n')
  .description('new component')
  .option('-n <name>', ' component name')
  .action(add)

program.command('publish')
  .alias('p')
  .description('project publish')
  .action(deploy)

program.parse(process.argv)