function write(item, main) {

    var parameters = [];

    var static = (item.static) ? 'static ' : '';

    item.params.forEach(element => {
        
        parameters.push(
            main.parse(
                element
            )
        );

    });

    return `${static}${main.parse(item.key)} (${parameters.join(', ')}) ${main.parse(item.body)}`;

}

module.exports = { write };