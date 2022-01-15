const commentFormatter = require('../utility/commentFormatter');

function write(item, main) {

    return `(${main.parse(item.test)}) ? ${main.parse(item.consequent)} : ${main.parse(item.alternate)}`;

}

module.exports = { write };