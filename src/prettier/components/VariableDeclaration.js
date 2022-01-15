function write(item, main) {

    return `${item.kind} ${main.parse(item.declarations[0])}`;

}

module.exports = { write };