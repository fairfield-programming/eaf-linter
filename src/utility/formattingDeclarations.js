var settings = {
    useSemicolon: true
};

function semicolon() {

    if (settings.useSemicolon) return ';';
    return '';

}

module.exports = {
    semicolon
};