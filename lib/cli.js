#!/usr/bin/env node
const program = require('commander')
const { server, build,new, deploy } = require('./commands')
const pkg = require('../package')
const logger = require('./logger')

program.version(pkg.version)
  .usage('<command>')

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
  .description('build project')
  .action(new)

  program.command('deploy')
  .alias('d')
  .description('project publish')
  .action(deploy)

program.parse(process.argv)