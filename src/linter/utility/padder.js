function verticalPadding(text, amount) {

    // Initiate Output
    var output = "";

    // Apply Top Padding
    output += new Array(amount + 1).join("\n");

    // Add the Text
    output += text;

    // Apply Bottom Padding
    output += new Array(amount + 1).join("\n");

    // Return the Output
    return output;

}

function indent(text, amount) {

    var newline = new Array(amount + 1).join("\t") + "\n";

    return new Array(amount + 1).join("\t") + text.replace(/\n/g, newline);

}

module.exports = {
    verticalPadding,
    indent
};