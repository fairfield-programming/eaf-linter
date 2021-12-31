#! /usr/bin/env node

const reporter = require('./reporter');
const tester = require('./tester');
const performer = require('./performer');

reporter.storeMetricsFile();
tester.testFolder(process.cwd());
// performer.testFolder(process.cwd());
