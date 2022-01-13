const parser = require("@babel/parser");

const commentSeparator = require('./pipe/commentSeparator');

var syntaxTree = parser.parse(
`

// good, use the let.
let count = 1;
if (true) {
  
  count += 1;
  
} else if (false) {

  count += 2;
  
} else {

  count += 3;

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
    StringLiteral: require("./components/StringLiteral"),
    ExpressionStatement: require("./components/ExpressionStatement"),
    CallExpression: require("./components/CallExpression"),
    MemberExpression: require("./components/MemberExpression"),
    ArrowFunctionExpression: require("./components/ArrowFunctionExpression"),
    FunctionExpression: require("./components/FunctionExpression"),
    AssignmentExpression: require("./components/AssignmentExpression"),
    ArrayExpression: require("./components/ArrayExpression"),
    IfStatement: require("./components/IfStatement"),
    BooleanLiteral: require("./components/BooleanLiteral")
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

    if (item == null) throw new Error(`Item is null`);

    if (item.type == undefined) throw new Error(`${item} does not have type.`);

    var component = components[item.type];

    if (component == null) throw new Error(`Type ${item.type}, does not exist.`);

    return component.write(item, {
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