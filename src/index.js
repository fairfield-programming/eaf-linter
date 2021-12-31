#! /usr/bin/env node

const reporter = require('./reporter');
const tester = require('./tester');
const embeder = require('./embeder');

reporter.storeMetricsFile();
var testResults = tester.testFolder(process.cwd());

embeder.embedTestResults({
    "Ran Tests": {
        "Cleared Something": true,
        "Worked Well": true
    },
    "Something Else Here": {
        "Sub-Item Worked": true,
        "Sub-Item": {
            "Length Set Correctly": false,
            "Stuff Here": true
        }
    }
});