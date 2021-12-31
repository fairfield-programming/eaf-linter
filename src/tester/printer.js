function allChildrenTrue(data) {

    var allTrue = true;

    for (var key in data) {

        var value = data[key];

        if (typeof value == 'object')
            allTrue = allTrue && allChildrenTrue(value);

        if (typeof value == 'boolean')
            allTrue = allTrue && value;

    }

    return allTrue;

}

function printMarkdownData(results) {

    var outputData = "";

    for (var key in results) {

        var value = results[key];

        if (typeof value == 'object') {
        
            let childrenTrue = allChildrenTrue(value);

            outputData += `- [${childrenTrue ? 'X' : ' '}] ${key}\n`;
            outputData += "\t" + indentLines(printMarkdownData(value)).trim() + "\n";
        
        }

        if (typeof value == 'boolean')
            outputData += `- [${value ? 'X' : ' '}] ${key}\n`;

    }

    return outputData;

}

function printConsoleData(results) {

    var outputData = "";

    for (var key in results) {

        var value = results[key];

        if (typeof value == 'object') {
        
            let childrenTrue = allChildrenTrue(value);

            outputData += `${printDotTestResult(key, childrenTrue)}\n`;
            outputData += "\t" + indentLines(printConsoleData(value)).trim() + "\n";
        
        }

        if (typeof value == 'boolean')
            outputData += `${printDotTestResult(key, value)}\n`;

    }

    return outputData;

}

function printDotTestResult(text, result) {

    // Set Title to Be Bold
    var resultTitle = "\033[1m";

    if (result == true) resultTitle += "\033[1;32;49m•";
    if (result == false) resultTitle += "\033[1;31;49m•";

    // Unbold Title
    resultTitle += "\033[22m";
    resultTitle += "\033[0m";

    // Log to Console
    return `${resultTitle} ${text}`;

}

function printTestResult(text, result) {

    // Set Title to Be Bold
    var resultTitle = "\033[1m";

    if (result == true) resultTitle += "\033[1;37;42m PASSED ";
    if (result == false) resultTitle += "\033[1;37;41m FAILED ";

    // Unbold Title
    resultTitle += "\033[22m";
    resultTitle += "\033[0m";

    // Log to Console
    return `${resultTitle} ${text}`;

}

function indentLines(text) {

    var lines = text.split("\n");
    return "\t" + lines.join("\n\t");

}

// console.log(printConsoleData({
//     "Ran Tests": {
//         "Cleared Something": true,
//         "Worked Well": true
//     },
//     "Something Else Here": {
//         "Sub-Item Worked": true,
//         "Sub-Item": {
//             "Length Set Correctly": false,
//             "Stuff Here": true
//         }
//     }
// }));

module.exports = {
    indentLines,
    printTestResult,
    printDotTestResult,
    printConsoleData,
    printMarkdownData,
    allChildrenTrue,
};