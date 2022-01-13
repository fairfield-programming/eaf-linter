function write(item, main) {

    var parameters = [];

    item.params.forEach(element => {
        
        parameters.push(
            main.parse(
                element
            )
        );

    });

    return `function ${main.parse(item.key)} (${parameters.join(', ')}) ${main.parse(item.body)}`;

}

module.exports = { write };