const vm = require('vm');
const fs = require('fs');

function runTestFile(testFilePath) {

    // Create the Context
    const context = { 
        console: require('./libraries/console'),
        ...require('./library'),
        EAF_CURRENT_TEST_PASSING: true
    };
    vm.createContext(context);
    
    // Run the File in a Virtual Machine
    const code = fs.readFileSync(testFilePath);
    vm.runInContext(code, context);

    // Check if the Test Passed
    return context.EAF_CURRENT_TEST_PASSING;

}
