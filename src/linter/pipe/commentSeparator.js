function separateComments(input) {

    var output = [];

    input.forEach(function (item) {

        if (item.leadingComments !== undefined)
            output.push(...item.leadingComments);
        
        output.push(item);

    });

    return output;

}

module.exports = separateComments;