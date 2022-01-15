const parser = require("@babel/parser");
const fs = require('fs');

const commentSeparator = require('./pipe/commentSeparator');
const staleDetector = require('./pipe/staleDetector');

function fileToAST(input) {

    // Check that Input is Defined
    if (input == undefined) return "";

    // Babel Parse It
    var syntaxTree = parser.parse(input).program.body;

}

function pipe(input) {

    // Setup Input and Output
    var output = input;

    // Use a Piping System
    [
        commentSeparator,
        staleDetector
    ]
    .forEach(function (pipe) {

        output = pipe(output);

    });

    // Return the Output
    return output;

}

function run() {

    var fileData = lintString(fs.readFileSync(__dirname + '/test.js', 'ascii'));
    fs.writeFileSync(__dirname + '/test.js', fileData);

}

module.exports = {
    run
};