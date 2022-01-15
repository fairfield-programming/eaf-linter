function write(item, main) {

    return `for (${main.parse(item.left)} in ${main.parse(item.right)}) ${main.parse(item.body)}`;

}

module.exports = { write };