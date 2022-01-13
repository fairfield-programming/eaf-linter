function write(item, main) {

    return `${main.parse(item.expression)}`;

}

module.exports = { write };