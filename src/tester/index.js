const vm = require('vm');
const fs = require('fs');

function runTestFile(testFilePath) {

    // Create the Context
    const context = { 
        console,
        ...require('./library')
    };
    vm.createContext(context);
    
    // Setup Context for Passing
    global.EAF_CURRENT_TEST_PASSING = true;

    // Run the File in a Virtual Machine
    const code = fs.readFileSync(testFilePath);
    vm.runInContext(code, context);

    // Check if the Test Passed
    return global.EAF_CURRENT_TEST_PASSING;

}

function printTestResult(fileName, result) {

    // Set Title to Be Bold
    var resultTitle = "\033[1m";

    if (result == true) resultTitle += "\033[1;37;42m PASSED ";
    if (result == false) resultTitle += "\033[1;37;41m FAILED ";

    // Unbold Title
    resultTitle += "\033[22m";
    resultTitle += "\033[0m";

    // Log to Console
    console.log(`${resultTitle} ${fileName}`);

}

printTestResult('./tests/tests.js', true);
printTestResult('./tests/tests.js', false);
printTestResult('./tests/tests.js', false);
printTestResult('./tests/tests.js', true);
printTestResult('./tests/tests.js', false);
