function write(item, main) {

    if (item.prefix) return `${item.operator}${main.parse(item.argument)}`;
    return `${main.parse(item.argument)}${item.operator}`;

}

module.exports = { write };