const parser = require("@babel/parser");

const commentSeparator = require('./pipe/commentSeparator');

var syntaxTree = parser.parse(
`
// this is a test
function testing() {

    var username = "William McGonagle"

}

`).program.body;

var components = {
    VariableDeclarator: require("./components/VariableDeclarator"),
    VariableDeclaration: require("./components/VariableDeclaration"),
    BinaryExpression: require("./components/BinaryExpression"),
    Identifier: require("./components/Identifier"),
    NumericLiteral: require("./components/NumericLiteral"),
    CommentLine: require("./components/CommentLine"),
    FunctionDeclaration: require("./components/FunctionDeclaration"),
    BlockStatement: require("./components/BlockStatement"),
    StringLiteral: require("./components/StringLiteral")
};

// Use a Piping System
var currentState = syntaxTree;

[
    commentSeparator,
]
.forEach(function (pipe) {

    currentState = pipe(currentState);

});

// Standard Piping Function
function parse(item) {

    return components[item.type].write(item, {
        parse
    });

}

currentState.forEach(function (element) {

    console.log(parse(element));

});

function run() {



}

module.exports = {
    run
};