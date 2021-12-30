const Folder = require('../general/folder');
const packageLib = require('../general/package');

function calculateScore() {

    // Find Package Files
    var package = packageLib.getPackageData();
    var lock = packageLib.getLockData();
    var root = new Folder(process.cwd());

    // Get Settings
    var eafSettings = packageLib.getEafSettings(package);

    // Count Some Metrics
    var directDependenciesCount = packageLib.countDependencies(package);
    var indirectDependenciesCount = packageLib.countDependencies(lock);
    var commentCount = root.countLineComments();
    var lineCount = root.countLines();

    // Setup Scoring
    var scoring = eafSettings.scoring;

    // Replace the Metrics 
    scoring = scoring.replace(/indirectDependencies/g, indirectDependenciesCount);
    scoring = scoring.replace(/directDependencies/g, directDependenciesCount);
    scoring = scoring.replace(/commentCount/g, commentCount);
    scoring = scoring.replace(/lineCount/g, lineCount);

    // Return the Score
    return eval(scoring);

}

function scoreToLetter(score) {

    if (score >= 97) return "A+";
    if (score >= 93) return "A";
    if (score >= 90) return "A-";
    if (score >= 87) return "B+";
    if (score >= 83) return "B";
    if (score >= 80) return "B-";
    if (score >= 77) return "C+";
    if (score >= 73) return "C";
    if (score >= 70) return "C-";
    if (score >= 67) return "D+";
    if (score >= 63) return "D";
    if (score >= 60) return "D-";

    return "F";

}

module.exports = {
    calculateScore,
    scoreToLetter
};