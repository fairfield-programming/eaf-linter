const fs = require('fs');
const path = require('path');

function getPackageData() {

    var filePath = path.join(process.cwd(), './package.json');
    var fileData = fs.readFileSync(filePath, 'ascii');
    return JSON.parse(fileData);

}

function getLockData() {

    var filePath = path.join(process.cwd(), './package-lock.json');
    var fileData = fs.readFileSync(filePath, 'ascii');
    return JSON.parse(fileData);

}

function countDependencies(package) {

    // Create an Array of Dependencies
    var dependencies = [];

    // Make Sure Dependencies Exist
    if (package.dependencies == undefined) return 0;

    // Add Each of the Dependencies
    for (const [key, value] of Object.entries(package.dependencies)) {
        
        // Add the Package
        dependencies.push(key);

    }

    // Return the Dependencies Count
    return dependencies.length;

}

module.exports = {
    getPackageData,
    getLockData,
    countDependencies,
};