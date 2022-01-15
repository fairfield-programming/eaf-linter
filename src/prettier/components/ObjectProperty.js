function write(item, main) {

    if (item.shorthand) return `${main.parse(item.key)}`;
    if (item.computed) return `[${main.parse(item.key)}]: ${main.parse(item.value)}`

    return `${main.parse(item.key)}: ${main.parse(item.value)}`;

}

module.exports = { write };