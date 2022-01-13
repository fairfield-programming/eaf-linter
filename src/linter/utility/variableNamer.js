function capitalizeFirstLetter(word) {

    return word[0].toUpperCase() + word.slice(1).toLowerCase();

}

function reformatIdentifier(input, format) {

    // Check if Input String Exists
    if (input == undefined) return;

    // Convert to Array
    var identiferParts = toStandardIdentifierFormat(input);

    // Check Format
    if (format == undefined) return toCamelCase(identiferParts);

    // Compare Formats
    var formatter = {
        "pascal": toPascalCase,
        "camel": toCamelCase,
        "lower": toLowercase,
        "upper": toUppercase,
        "whisper": toLowerSnakecase,
        "shout": toUpperSnakecase,
        "south": toCamelSnakecase,
        "proper": toPascalSnakecase,
        "kebab": toKebabcase,
        "train": toTraincase,
        "header": toHeadercase
    }[format];

    // Default to Camelcase
    if (formatter == undefined) return toCamelCase(identiferParts);

    // Return the Output
    return formatter(identiferParts);

}

// Converts the Name into an Array
function toStandardIdentifierFormat(input) {

    // Check if Input String Exists
    if (input == undefined) return;

    // Create Output Array
    var output = [ '' ];
    var n = 0;

    // Loop through Each Letter
    for (var i = 0; i < input.length; i++) {

        // Get the Current Letter
        let currentLetter = input[i]; 

        // Check if Its a Delimiter
        if (currentLetter == ' ' || currentLetter == '-' || currentLetter == '_') {

            if (output[n] == '') continue;

            output.push('');
            n++;
            continue;

        }

        // Check if Its Now a Capital Letter
        if (currentLetter === currentLetter.toUpperCase() && currentLetter !== currentLetter.toLowerCase()) {

            if (output[n] == '') {
                
                output[n] += currentLetter.toLowerCase();
                continue;

            }

            output.push(currentLetter.toLowerCase());
            n++;
            continue;

        }

        // If Letter Still Here, Add It
        output[n] += currentLetter;

    }

    // Return the Output
    return output;

}

function toFormattedIdentifier(identifier, settings) {

    // Check if Identifier Array Exists
    if (identifier == undefined || identifier.length == 0) return "";

    // Setup Settings
    var trueSettings = {
        delimiter: settings.delimiter || "",
        forceLowercaseFirst: settings.forceLowercaseFirst,
        capitalizeWords: settings.capitalizeWords,
        uppercaseWords: settings.uppercaseWords || false
    };

    if (trueSettings.forceLowercaseFirst == undefined) trueSettings.forceLowercaseFirst = true;
    if (trueSettings.capitalizeWords == undefined) trueSettings.capitalizeWords = true;
    if (trueSettings.uppercaseWords == undefined) trueSettings.uppercaseWords = true;

    // Create Output
    var output = ``;

    // Loop through Each Word
    identifier.forEach(function (word, i) {

        if (trueSettings.capitalizeWords) {

            // Check if First Word
            if (i == 0) {

                if (trueSettings.forceLowercaseFirst) {

                    output += word;

                } else {

                    output += capitalizeFirstLetter(word);

                }

            } else {

                output += capitalizeFirstLetter(word);

            }

        } else {

            // Check if First Word
            output += word;

        }

        if (i != identifier.length - 1)
            output += trueSettings.delimiter;

    });

    // Check if Uppercase
    if (trueSettings.uppercaseWords) 
        output = output.toUpperCase();

    // Return the Output
    return output;

}

function toPascalCase(input) {

    return toFormattedIdentifier(input, {
        delimiter: "",
        forceLowercaseFirst: false,
        capitalizeWords: true,
        uppercaseWords: false
    });

}

function toCamelCase(input) {

    return toFormattedIdentifier(input, {
        delimiter: "",
        forceLowercaseFirst: true,
        capitalizeWords: true,
        uppercaseWords: false
    });

}

function toUppercase(input) {

    return toFormattedIdentifier(input, {
        delimiter: "",
        forceLowercaseFirst: false,
        capitalizeWords: false,
        uppercaseWords: true
    });

}

function toLowercase(input) {

    return toFormattedIdentifier(input, {
        delimiter: "",
        forceLowercaseFirst: false,
        capitalizeWords: false,
        uppercaseWords: false
    });

}

function toUpperSnakecase(input) {

    return toFormattedIdentifier(input, {
        delimiter: "_",
        forceLowercaseFirst: false,
        capitalizeWords: false,
        uppercaseWords: true
    });

}

function toLowerSnakecase(input) {

    return toFormattedIdentifier(input, {
        delimiter: "_",
        forceLowercaseFirst: false,
        capitalizeWords: false,
        uppercaseWords: false
    });

}

function toCamelSnakecase(input) {

    return toFormattedIdentifier(input, {
        delimiter: "_",
        forceLowercaseFirst: true,
        capitalizeWords: true,
        uppercaseWords: false
    });

}

function toPascalSnakecase(input) {

    return toFormattedIdentifier(input, {
        delimiter: "_",
        forceLowercaseFirst: false,
        capitalizeWords: true,
        uppercaseWords: false
    });

}

function toKebabcase(input) {

    return toFormattedIdentifier(input, {
        delimiter: "-",
        forceLowercaseFirst: false,
        capitalizeWords: false,
        uppercaseWords: false
    });

}

function toTraincase(input) {

    return toFormattedIdentifier(input, {
        delimiter: "-",
        forceLowercaseFirst: false,
        capitalizeWords: false,
        uppercaseWords: true
    });

}

function toHeadercase(input) {

    return toFormattedIdentifier(input, {
        delimiter: "-",
        forceLowercaseFirst: false,
        capitalizeWords: true,
        uppercaseWords: false
    });

}

module.exports = {
    reformatIdentifier,
    toStandardIdentifierFormat,
    toFormattedIdentifier,
    toPascalCase,
    toCamelCase,
    toUppercase,
    toLowercase,
    toUpperSnakecase,
    toLowerSnakecase,
    toCamelSnakecase,
    toPascalSnakecase,
    toKebabcase,
    toTraincase,
    toHeadercase
};