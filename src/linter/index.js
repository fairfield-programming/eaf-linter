var parser = require("@babel/parser");
var syntaxTree = parser.parse("// this is a test \nvar a = '123'").program.body;

var components = {
    VariableDeclaration: require("./components/VariableDeclaration")
};

syntaxTree.forEach(function (element) {

    console.log(components[element.type].write(element));

});