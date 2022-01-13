function write(item, main) {

    return `return ${main.parse(item.argument)}`;

}

module.exports = { write };