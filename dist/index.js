#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('1.0.0').description('Print current unix timestamp.');

_commander2.default.action(function (env, options) {
  var current = (0, _moment2.default)();

  var date = current.format('YYYY-MM-DD HH:mm:ss');
  var second = current.unix();

  console.log(_chalk2.default.red('Date: '), date);
  console.log(_chalk2.default.green('Timestamp: '), second);
});
_commander2.default.parse(process.argv);