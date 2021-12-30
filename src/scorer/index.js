const packageLib = require('../general/package');

function calculateScore() {

    // Find Package Files
    var package = packageLib.getPackageData();
    var lock = packageLib.getLockData();

    // Count Some Metrics
    var directDependenciesCount = packageLib.countDependencies(package);
    var indirectDependenciesCount = packageLib.countDependencies(lock);

    return [directDependenciesCount, indirectDependenciesCount];

}

module.exports = {
    calculateScore
};