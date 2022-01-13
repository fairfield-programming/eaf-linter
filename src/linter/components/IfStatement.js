function write(item, main) {

    return `if (${main.parse(item.test)}) ${main.parse(item.consequent)}`;

}

module.exports = { write };