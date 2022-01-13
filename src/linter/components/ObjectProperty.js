function write(item, main) {

    if (item.computed) return `[${main.parse(item.key)}]: ${main.parse(item.value)}`

    return `${main.parse(item.key)}: ${main.parse(item.value)}`;

}

module.exports = { write };