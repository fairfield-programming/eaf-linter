const fs = require('fs');
const path = require('path');

function openReadme() {

    var currentPath = path.join(process.cwd(), './readme.md');
    return fs.readFileSync(currentPath, 'ascii');

}

function embedTestResults(results) {

    var fileData = openReadme();

    if (!fileData.includes('<!--- TEST RESULTS -->')) return;

    

}

module.exports = {
    embedTestResults
};