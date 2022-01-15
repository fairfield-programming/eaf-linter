function write(item, main) {

    return `${main.parse(item.left)} ${item.operator} ${main.parse(item.right)}`;

}

module.exports = { write };