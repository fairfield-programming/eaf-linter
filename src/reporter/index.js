const fs = require('fs');
const path = require('path');
const Folder = require('../general/folder');
const packageLib = require('../general/package');

function figureMetrics() {

    // Find Package Files
    var package = packageLib.getPackageData();
    global.eafSettings = packageLib.getEafSettings(package);
    var lock = packageLib.getLockData();
    var root = new Folder(process.cwd());

    // Count Some Metrics
    var directDependenciesCount = packageLib.countDependencies(package);
    var indirectDependenciesCount = packageLib.countDependencies(lock || {});
    var commentCount = root.countLineComments();
    var lineCount = root.countLines();
    var fileCount = root.countFiles();

    // Return as One Object
    return {
        directDependenciesCount,
        indirectDependenciesCount,
        commentCount,
        lineCount,
        fileCount
    };

}

function calculateScore(metrics) {

    // Check if Metrics Exists
    if (metrics == undefined) return 0;

    // Setup Scoring
    var scoring = eafSettings.scoring;

    // Replace the Metrics 
    scoring = scoring.replace(/indirectDependencies/g, metrics.indirectDependenciesCount);
    scoring = scoring.replace(/directDependencies/g, metrics.directDependenciesCount);
    scoring = scoring.replace(/commentCount/g, metrics.commentCount);
    scoring = scoring.replace(/lineCount/g, metrics.lineCount);
    scoring = scoring.replace(/fileCount/g, metrics.fileCount);

    // Return the Score
    return eval(scoring);

}

function calculateGrade(score) {

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

function fixPathToMetrics() {

    var githubPath = path.join(process.cwd(), '.github');
    var metricsPath = path.join(process.cwd(), '.github', 'metrics.json');

    if (!fs.existsSync(githubPath)) 
        fs.mkdirSync(githubPath);

    return metricsPath;

}

function storeMetricsFile() {

    // Store the Metrics
    var metrics = figureMetrics();
    var metricsPath = fixPathToMetrics();

    // Find the Score
    metrics.score = calculateScore(metrics);
    metrics.grade = calculateGrade(metrics.score);

    // JSON to File Data
    var fileData = JSON.stringify(metrics, null, 4);

    // Write the Metrics File
    fs.writeFileSync(metricsPath, fileData);

}

module.exports = {
    calculateScore,
    calculateGrade,
    storeMetricsFile,
    figureMetrics,
    fixPathToMetrics,
};