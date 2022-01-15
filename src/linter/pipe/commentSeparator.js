const { iterate } = require("../../utility/pipeHelper");

function separateComments(input) {

    var output = [];

    input.forEach(element => {
        
        if (element.leadingComments !== undefined)
        output.push(...element.leadingComments);
    
        output.push(element);

    });

    return output;

}

module.exports = separateComments;