const linter = require("../linter/index");
const path = require('path');
const fs = require('fs');
const Folder = require("../general/folder");

var components = fs.readdirSync(__dirname + "/components/").map(function (element, index) {

    return { 
        key: path.basename(element, path.extname(element)),
        value: require(path.join(__dirname, "/components/", element)) 
    };

}).reduce(function(map, obj) {

    map[obj.key] = obj.value;
    return map;

}, {})

function parse(item) {

    if (item == null) throw new Error(`Item is null`);

    if (item.type == undefined) throw new Error(`${item} does not have type.`);

    var component = components[item.type];

    if (component == null) throw new Error(`Type ${item.type}, does not exist.`);

    return component.write(item, {
        parse
    });

}

function stringifyAST(finalSyntaxTree) {

    // Create Output Data
    var output = [];

    // Go Through Syntax Tree
    finalSyntaxTree.forEach(function (element) {

        output.push(parse(element));

    });

    // Return Output
    return output.join("\n");

}

function cleanFile(input) {

    // Read AST and Pipe It 
    var syntaxTree = linter.fileToAST(input);
    var finalSyntaxTree = linter.pipe(syntaxTree);

    // Return the Stringified AST
    return stringifyAST(finalSyntaxTree);

}

function run() {

    var folder = new Folder(process.cwd());

    folder.forEachFile(function fileMethod(file, state) {

        if (path.extname(file.filePath) == ".js") {

            console.log(file.filePath);

            var fileData = fs.readFileSync(file.filePath, 'ascii');
            var cleanedFile = cleanFile(fileData);

            console.log(cleanedFile);
        
        }

    }, { });

}

module.exports = {
    cleanFile,
    stringifyAST,
    parse,
    run,
};