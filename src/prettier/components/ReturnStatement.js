const { semicolon } = require('../../utility/formattingDeclarations');

function write(item, main) {

    if (item.argument == null) return `return${semicolon()}`;

    return `return ${main.parse(item.argument)}${semicolon()}`;

}

module.exports = { write };