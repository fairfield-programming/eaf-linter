function separateComments(input) {

    var output = [];

    input.forEach(function (item) {

        output.push(...item.leadingComments);
        output.push(item);

    });

    return output;

}

module.exports = separateComments;