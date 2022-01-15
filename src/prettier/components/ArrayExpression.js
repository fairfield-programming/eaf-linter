function write(item, main) {

    var elements = [];

    item.elements.forEach(element => {
        
        elements.push(
            main.parse(
                element
            )
        );

    });

    return `[ ${elements.join(', ')} ]`;

}

module.exports = { write };