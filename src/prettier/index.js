const linter = require("../linter/index");

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
    SpreadElement: require("./components/SpreadElement"),
    ObjectPattern: require("./components/ObjectPattern"),
    ConditionalExpression: require("./components/ConditionalExpression")
}; 

function parse(item) {

    if (item == null) throw new Error(`Item is null`);

    if (item.type == undefined) throw new Error(`${item} does not have type.`);

    var component = components[item.type];

    if (component == null) throw new Error(`Type ${item.type}, does not exist.`);

    return component.write(item, {
        parse
    });

}

function stringifyAST(ast) {

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
    var finalSyntaxTree = pipe(syntaxTree);

    // Return the Stringified AST
    return stringifyAST(finalSyntaxTree);

}

function run(settings) {



}

module.exports = {
    cleanFile,
    stringifyAST,
    parse,
    run,
};