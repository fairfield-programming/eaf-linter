const parser = require("@babel/parser");

const commentSeparator = require('./pipe/commentSeparator');

var syntaxTree = parser.parse(
`
// good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
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
    BooleanLiteral: require("./components/BooleanLiteral"),
    NewExpression: require("./components/NewExpression"),
    ObjectExpression: require("./components/ObjectExpression"),
    ObjectProperty: require("./components/ObjectProperty"),
    ReturnStatement: require("./components/ReturnStatement"),
    ObjectMethod: require("./components/ObjectMethod")
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