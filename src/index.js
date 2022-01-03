#! /usr/bin/env node

const reporter = require('./reporter');
const tester = require('./tester');
const performer = require('./performer');

reporter.storeMetricsFile();

if (global.eafSettings["run-tests"] != undefined) {

    if (global.eafSettings["run-tests"] != false)
        tester.testFolder(process.cwd());

} else {

    tester.testFolder(process.cwd());

}
// performer.testFolder(process.cwd());
