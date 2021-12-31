const vm = require('vm');
const fs = require('fs');
const path = require('path');
const Folder = require("../general/folder")

function runTestFile(testFilePath) {

    // Create the Context
    const context = { 
        WebAssembly,
        URLSearchParams,
        URL,
        TextEncoder,
        TextDecoder,
        DOMException,
        structuredClone,
        setTimeout,
        setInterval,
        setImmediate,
        require,
        queueMicrotask,
        process,
        performance,
        module,
        MessagePort,
        MessageEvent,
        MessageChannel,
        global,
        exports,
        EventTarget,
        Event,
        console,
        clearTimeout,
        clearInterval,
        clearImmediate,
        btoa,
        atob,
        __dirname,
        __filename,
        Buffer,
        AbortController,
        AbortSignal,
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

    // Make File Name Relative
    var relativeFileName = trimFilePath(fileName);

    // Log to Console
    console.log(`${resultTitle} ${relativeFileName}`);

}

function trimFilePath(filePath) {

    return path.relative(process.cwd(), filePath);

}

function testFolder(folderPath) {

    var folder = new Folder(folderPath);
    var allTestsPassed = true;

    folder.forEachFile(function fileMethod(file, state) {

        if (file.filePath.includes("tests")) {
        
            var testResult = runTestFile(file.filePath);
            printTestResult(file.filePath, testResult);
            allTestsPassed = allTestsPassed && testResult;
        
        }

    }, { });

    if (!allTestsPassed) {

        process.exit(-1);

    }

}

module.exports = {
    testFolder,
    printTestResult,
    runTestFile,
};