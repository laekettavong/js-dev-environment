//var chalk = require('chalk'); //librabry to specify the output color in console

//'import' is only available on ES6, so use Babel to transpile to ES5 via thge 'babel-node' command
import chalk from 'chalk';

/* eslint-disable no-console */
console.log(chalk.green('Starting app in dev mode...'));
