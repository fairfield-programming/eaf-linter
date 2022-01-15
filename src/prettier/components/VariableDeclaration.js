function write(item, main) {

    var declarations = [];

    item.declarations.forEach(element => {
        
        declarations.push(
            main.parse(
                element
            )
        );

    });

    return `${item.kind} ${declarations.join()}`;

}

module.exports = { write };