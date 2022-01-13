function write(item, main) {

    return `...${main.parse(item.argument)}`;

}

module.exports = { write };