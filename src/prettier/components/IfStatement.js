function write(item, main) {

    if (item.alternate == undefined) return `if (${main.parse(item.test)}) ${main.parse(item.consequent)}`;

    return `if (${main.parse(item.test)}) ${main.parse(item.consequent)} else ${main.parse(item.alternate)}`;

}

module.exports = { write };