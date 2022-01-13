const fs = require('fs');
const path = require('path');
const File = require('./file');

class Folder {

    constructor(dirPath) {

        this.folderPath = dirPath;
        
    }

    isIgnored() {

        // Check if the Folder Should be Ignored
        return new RegExp(global.eafSettings.ignore).test(this.folderPath);

    }

    countFiles() {

        // Check if Folder Should be Ignored
        if (this.isIgnored()) return 0;

        // Initialize Count and Folders
        var count = 0;
        var subfolders = this.getFolders();

        // Add File Count
        count += this.getFiles().length;

        // Loop Through Sub-Folders
        subfolders.forEach((folder) => {

            count += folder.countFiles();

        });

        // Return the Count
        return count;

    }

    countLines() {

        // Check if Folder Should be Ignored
        if (this.isIgnored()) return 0;

        // Initialize Count and Folders
        var count = 0;
        var subfolders = this.getFolders();
        var files = this.getFiles();
        
        // Loop Through Sub-Folders
        subfolders.forEach((folder) => {

            count += folder.countLines();

        });

        // Loop Through Files
        files.forEach((file) => {

            count += file.countLines();

        });

        // Return the Count
        return count;

    }

    forEachFileAndFolder(fileMethod, folderMethod, state) {

        // Check if Folder Should be Ignored
        if (this.isIgnored()) return;

        // Initialize Count and Folders
        var subfolders = this.getFolders();
        var files = this.getFiles();
        
        // Loop Through Sub-Folders
        subfolders.forEach((folder) => {

            folder.forEachFile(fileMethod, folderMethod, folderMethod(this.folderPath, state));

        });

        // Loop Through Files
        files.forEach((file) => {

            fileMethod(file, folderMethod(this.folderPath, state));

        });

    }

    forEachFile(method, state) {

        // Check if Folder Should be Ignored
        if (this.isIgnored()) return;

        // Initialize Count and Folders
        var subfolders = this.getFolders();
        var files = this.getFiles();
        
        // Loop Through Sub-Folders
        subfolders.forEach((folder) => {

            folder.forEachFile(method, state);

        });

        // Loop Through Files
        files.forEach((file) => {

            method(file, state);

        });

    }

    countLineComments() {

        // Check if Folder Should be Ignored
        if (this.isIgnored()) return 0;

        // Initialize Count and Folders
        var count = 0;
        var subfolders = this.getFolders();
        var files = this.getFiles();
        
        // Loop Through Sub-Folders
        subfolders.forEach((folder) => {

            count += folder.countLineComments();

        });

        // Loop Through Files
        files.forEach((file) => {

            count += file.countLineComments();

        });

        // Return the Count
        return count;
        
    }

    getFolders() {

        // Create Output
        var output = [];
        var filesAndFolders = fs.readdirSync(this.folderPath, { withFileTypes: true });

        // Loop through Each
        filesAndFolders.forEach((item) => {

            if (item.isDirectory()) 
                output.push(new Folder(path.join(this.folderPath, item.name)));

        });

        // Return the Output
        return output;

    }

    getFiles() {

        // Create Output
        var output = [];
        var filesAndFolders = fs.readdirSync(this.folderPath, { withFileTypes: true });

        // Loop through Each
        filesAndFolders.forEach((item) => {

            // If Its a File, Add It to the List
            if (!item.isDirectory()) 
                output.push(new File(path.join(this.folderPath, item.name)));

        });

        // Return the Output
        return output;

    }

}

module.exports = Folder;