const variableNamer = require('../utility/variableNamer');

function write(item, main) {

    return variableNamer.reformatIdentifier(item.name, 'camel');

}

module.exports = { write };