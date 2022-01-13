function write(item, main) {

    if (item.computed) return `${main.parse(item.object)}[${main.parse(item.property)}]`;

    return `${main.parse(item.object)}.${main.parse(item.property)}`;

}

module.exports = { write };