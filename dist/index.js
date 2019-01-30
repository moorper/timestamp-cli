#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('1.0.0').description('Print current unix timestamp.');

_commander2.default.action(function (env, options) {
  var date = new Date();
  var millisecond = date.getTime();
  var second = Math.round(millisecond / 1000);

  console.log(_chalk2.default.blue('Millisecond Unix Timestamp: '), millisecond);
  console.log(_chalk2.default.green('Second Unix Timestamp: '), second);
});
_commander2.default.parse(process.argv);