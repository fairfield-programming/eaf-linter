const padder = require('../utility/padder');

function write(item, main) {

    var output = [];

    item.body.forEach(element => {
        
        output.push(padder.indent(main.parse(element), 1));

    });

    var unpaddedText = output.join("\n");
    var paddedText = padder.verticalPadding(unpaddedText, 2);
    var indentedText = padder.indent(paddedText, 1);

    return `{${indentedText}}`;

}

module.exports = { write };