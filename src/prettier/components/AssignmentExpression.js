const { semicolon } = require('../utility/formattingDeclarations');

function write(item, main) {

    return `${main.parse(item.left)} ${item.operator} ${main.parse(item.right)}${semicolon()}`;

}

module.exports = { write };