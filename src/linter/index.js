const parser = require("@babel/parser");
const fs = require('fs');

const commentSeparator = require('./pipe/commentSeparator');
const staleDetector = require('./pipe/staleDetector');

var components = {
    VariableDeclarator: require("./components/VariableDeclarator"),
    VariableDeclaration: require("./components/VariableDeclaration"),
    BinaryExpression: require("./components/BinaryExpression"),
    Identifier: require("./components/Identifier"),
    NumericLiteral: require("./components/NumericLiteral"),
    CommentLine: require("./components/CommentLine"),
    FunctionDeclaration: require("./components/FunctionDeclaration"),
    BlockStatement: require("./components/BlockStatement"),
    StringLiteral: require("./components/StringLiteral"),
    ExpressionStatement: require("./components/ExpressionStatement"),
    CallExpression: require("./components/CallExpression"),
    MemberExpression: require("./components/MemberExpression"),
    ArrowFunctionExpression: require("./components/ArrowFunctionExpression"),
    FunctionExpression: require("./components/FunctionExpression"),
    AssignmentExpression: require("./components/AssignmentExpression"),
    ArrayExpression: require("./components/ArrayExpression"),
    IfStatement: require("./components/IfStatement"),
    BooleanLiteral: require("./components/BooleanLiteral"),
    NewExpression: require("./components/NewExpression"),
    ObjectExpression: require("./components/ObjectExpression"),
    ObjectProperty: require("./components/ObjectProperty"),
    ReturnStatement: require("./components/ReturnStatement"),
    ObjectMethod: require("./components/ObjectMethod"),
    TemplateLiteral: require("./components/TemplateLiteral"),
    TemplateElement: require("./components/TemplateElement"),
    SpreadElement: require("./components/SpreadElement")
}; 

// Standard Piping Function
function parse(item) {

    if (item == null) throw new Error(`Item is null`);

    if (item.type == undefined) throw new Error(`${item} does not have type.`);

    var component = components[item.type];

    if (component == null) throw new Error(`Type ${item.type}, does not exist.`);

    return component.write(item, {
        parse
    });

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

function lintString(input) {

    // Check that Input is Defined
    if (input == undefined) return "";

    // Babel Parse It
    var syntaxTree = parser.parse(input).program.body;
    var finalSyntaxTree = pipe(syntaxTree);

    // Create Output Data
    var output = [];

    // Go Through Syntax Tree
    finalSyntaxTree.forEach(function (element) {

        output.push(parse(element));

    });

    // Return Output
    return output.join("\n");

}

function run() {

    var fileData = lintString(fs.readFileSync(__dirname + '/test.js', 'ascii'));
    fs.writeFileSync(__dirname + '/test.js', fileData);

}

module.exports = {
    run
};