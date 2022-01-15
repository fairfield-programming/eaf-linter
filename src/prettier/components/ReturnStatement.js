const { semicolon } = require('../utility/formattingDeclarations');

function write(item, main) {

    return `return ${main.parse(item.argument)}${semicolon()}`;

}

module.exports = { write };