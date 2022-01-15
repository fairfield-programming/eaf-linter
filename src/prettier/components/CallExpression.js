function write(item, main) {

    var arguments = [];

    item.arguments.forEach(element => {
        
        arguments.push(
            main.parse(
                element
            )
        );

    });

    return `${main.parse(item.callee)}(${arguments.join(', ')})`;

}

module.exports = { write };