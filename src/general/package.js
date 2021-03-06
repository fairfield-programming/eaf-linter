const fs = require('fs');
const path = require('path');

function getPackageData() {

    var filePath = path.join(process.cwd(), './package.json');
    
    if (!fs.existsSync(filePath)) return null; 
    var fileData = fs.readFileSync(filePath, 'ascii');
    
    return JSON.parse(fileData);

}

function getLockData() {

    var filePath = path.join(process.cwd(), './package-lock.json');

    if (!fs.existsSync(filePath)) return null; 
    var fileData = fs.readFileSync(filePath, 'ascii');
    
    return JSON.parse(fileData);

}

function getEafDefaults() {

    // Get the Defaults
    return {
        ignore: "(node_modules)|(.git)",
        scoring: "(1 / (indirectDependencies + 1)) * 100",
        tests: false
    };

}

function getEafSettings(package) {

    // Get the Defaults
    var eafDefaults = getEafDefaults();

    // If Package.eaf Doesn't Exist, Just Return the Defaults
    if (package.eaf == undefined) return eafDefaults;

    // Return a Mix of Both
    return {
        tests: package.eaf.tests || eafDefaults.tests,
        scoring: package.eaf.scoring || eafDefaults.scoring,
        ignore: package.eaf.ignore || eafDefaults.ignore,
    };

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
    getEafSettings
};