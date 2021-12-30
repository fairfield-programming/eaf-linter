#! /usr/bin/env node

const reporter = require('./reporter');
const tester = require('./tester');

reporter.storeMetricsFile();
tester.testFolder(process.cwd());