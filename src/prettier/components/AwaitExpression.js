function write(item, main) {

    return `await ${main.parse(item.argument)}`;

}

module.exports = { write };