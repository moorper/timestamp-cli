#!/usr/bin/env node

import commander from 'commander'
import chalk from 'chalk'

commander
  .version('1.0.0')
  .description('Print current unix timestamp.')

commander.action(function (env, options) {
  const date = new Date()
  const millisecond = date.getTime()
  const second = Math.round(millisecond / 1000)

  console.log(chalk.blue('Millisecond Unix Timestamp: '), millisecond)
  console.log(chalk.green('Second Unix Timestamp: '), second)
})
commander.parse(process.argv)
