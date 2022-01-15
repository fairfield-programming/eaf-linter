function write(item, main) {

    var output = [];

    item.elements.forEach(element => {
        
        output.push(main.parse(element));

    });
    
    return `${output.join(', ')}`;

}

module.exports = { write };