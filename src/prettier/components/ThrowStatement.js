function write(item, main) {

    return `throw ${main.parse(item.argument)}`;

}

module.exports = { write };