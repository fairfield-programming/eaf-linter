function write(item, main) {

    return `${main.parse(item.object)}.${main.parse(item.property)}`;

}

module.exports = { write };