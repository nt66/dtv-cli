#!/usr/bin/env node
const program = require('commander')
const { server } = require('./commands')
const pkg = require('../package')

program.version(pkg.version)
  .usage('<command>')

program.command('server')
  .alias('s')
  .description('test page starting...')
  // .option('-a, --app <app>', 'the component name')
  .action(server)



program.parse(process.argv)