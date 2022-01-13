function write(item, main) {

    return `${main.parse(item.id)} = ${main.parse(item.init)}`;

}

module.exports = { write };