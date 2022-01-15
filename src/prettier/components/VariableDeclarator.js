function write(item, main) {

    if (item.init == null) return `${main.parse(item.id)}`;

    return `${main.parse(item.id)} = ${main.parse(item.init)}`;

}

module.exports = { write };