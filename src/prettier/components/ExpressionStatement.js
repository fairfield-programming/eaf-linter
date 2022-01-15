const { semicolon } = require('../../utility/formattingDeclarations');

function write(item, main) {

    return `${main.parse(item.expression)}${semicolon()}`;

}

module.exports = { write };