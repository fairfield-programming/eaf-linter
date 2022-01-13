const commentFormatter = require('../utility/commentFormatter');

function write(item, main) {

    return "// " + commentFormatter.reformatLineComment(item.value);

}

module.exports = { write };