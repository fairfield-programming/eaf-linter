function write(item, main) {

    return "function " + main.parse(item.id) + " " + main.parse(item.body);

}

module.exports = { write };