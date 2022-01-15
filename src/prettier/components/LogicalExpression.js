function write(item, main) {

    var parenthesized = false;

    if (item.extra != undefined)
        parenthesized = item.extra.parenthesized;

    if (parenthesized) return `(${main.parse(item.left)} ${item.operator} ${main.parse(item.right)})`;

    return `${main.parse(item.left)} ${item.operator} ${main.parse(item.right)}`;

}

module.exports = { write };