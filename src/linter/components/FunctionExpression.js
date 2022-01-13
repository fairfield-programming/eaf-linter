function write(item, main) {

    var parameters = [];

    item.params.forEach(element => {
        
        parameters.push(
            main.parse(
                element
            )
        );

    });

    if (item.id == null) return `function (${parameters.join(', ')}) ${main.parse(item.body)}`;

    return `function ${main.parse(item.id)} (${parameters.join(', ')}) ${main.parse(item.body)}`;

}

module.exports = { write };