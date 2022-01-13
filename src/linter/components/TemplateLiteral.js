function write(item, main) {

    var total = item.expressions.length + item.quasis.length;
    var output = "";

    for (var i = 0; i < total; i++) {

        if (i % 2 == 0) {

            output += main.parse(item.quasis[i / 2]);

        } else {

            output += "${" + main.parse(item.expressions[(i - 1) / 2]) + "}";

        }

    }

    return "`" + output + "`";

}

module.exports = { write };