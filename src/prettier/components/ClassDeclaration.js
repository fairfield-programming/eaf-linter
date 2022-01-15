function write(item, main) {

    return `class ${main.parse(item.id)} ${main.parse(item.body)}`;

}

module.exports = { write };