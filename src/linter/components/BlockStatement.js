const padder = require('../utility/padder');

function write(item, main) {

    var output = [];

    item.body.forEach(element => {
        
        output.push(padder.indent(main.parse(element), 1));

    });

    var unpaddedText = output.join("\n");
    var paddedText = padder.verticalPadding(unpaddedText, 2);

    return `{${paddedText}}`;

}

module.exports = { write };