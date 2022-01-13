const variableNamer = require('./variableNamer');

/*

{
    'label': 'issue',
    'value': 'This is a test'
}

*/

function reformatLineComment(comment) {

    var commentObject = parseLineComment(comment);

    return printLineComment(commentObject);

}

function parseLineComment(comment) {
    
    var commentParts = comment.split(":");

    if (commentParts.length == 1) return {
        value: commentParts[0]
    };

    if (commentParts.length == 2) return {
        label: commentParts[0],
        value: commentParts[1]
    };

}

function printLineComment(comment) {

    // Standard Stuffs
    var commentLabel = comment.label || "";
    var commentText = comment.value || "";

    // Format Label
    commentLabel = variableNamer.reformatIdentifier(commentLabel, 'shout')

    // Format Comment Text
    commentText = commentText.trim();

    // Check for a Label
    if (commentLabel == "") return `${commentText}`;

    // Return the Final Comment
    return `${commentLabel}: ${commentText}`;

}

module.exports = {
    reformatLineComment,
    parseLineComment,
    printLineComment
};