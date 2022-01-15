function write(item, main) {

    return `for (${main.parse(item.init)}; ${main.parse(item.test)}; ${main.parse(item.update)}) ${main.parse(item.body)}`;

}

module.exports = { write };