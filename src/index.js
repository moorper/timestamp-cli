#!/usr/bin/env node

import commander from 'commander'
import moment from 'moment'
import chalk from 'chalk'

commander
  .version('1.0.0')
  .description('Print current unix timestamp.')

commander.action(function (env, options) {
  const current = moment()

  const date = current.format('YYYY-MM-DD HH:mm:ss')
  const second = current.unix()

  console.log(chalk.red('Date: '), date)
  console.log(chalk.green('Timestamp: '), second)
})
commander.parse(process.argv)
