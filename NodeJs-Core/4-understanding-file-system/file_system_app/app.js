const fs = require('fs/promises');

const ac = new AbortController();
const { signal } = ac;
setTimeout(() => ac.abort(), 400000);

(async () => {
    const CREATE_FILE = 'create a file';
    const DELETE_FILE = 'delete the file';
    const RENAME_FILE = 'rename the file';
    const ADD_TO_FILE = 'add to the file';

    let addToFileToggle = true; //toggle to check if file content is already added while doing addToFile operation.

    const createFile = async (path) => {
        try {
            // Check whether the file already exists.
            const existingFileHandle = await fs.open(path, 'r');
            existingFileHandle.close();
            console.log(`The file ${path} already exists.`);
        } catch (err) {
            // else create a new file.
            const newFileHandle = await fs.open(path, 'w');
            console.log('A new file was successfully created.');
            newFileHandle.close();
        }
    };
    const deleteFile = async (path) => {
        console.log(`Deleting ${path}...`);
        try {
            // we can also use 'fsPromises.unlink()'
            const deleteFileHandle = await fs.rm(path); // fs.rm(path, {option})
            /**
             1. force <boolean> When true, exceptions will be ignored if path does not exist. Default: false.
             2. maxRetries <integer> If an EBUSY, EMFILE, ENFILE, ENOTEMPTY, or EPERM error is encountered, Node.js will retry the operation with a linear backoff wait of retryDelay milliseconds longer on each try. This option represents the number of retries. This option is ignored if the recursive option is not true. Default: 0.
             3. recursive <boolean> If true, perform a recursive directory removal. In recursive mode operations are retried on failure. Default: false.
                    --> this is similar to = "rm -rf dir".
             4. retryDelay <integer> The amount of time in milliseconds to wait between retries. This option is ignored if the recursive option is not true. Default: 100.
             */
        } catch (err) {
            if (err.code === 'ENOENT') {
                console.log(`The file ${path} does not exists.`);
            } else {
                console.log('An error occured while removing the file.');
                console.log(err);
            }
        }
    };
    const renameFile = async (oldPath, newPath) => {
        console.log(`Rename ${oldPath} to ${newPath}.`);
        try {
            await fs.rename(oldPath, newPath);
        } catch (err) {
            if (err.code === 'ENOENT') {
                console.log(`The file ${oldPath} does not exists.`);
            } else {
                console.log('An error occured while renaming the file.');
                console.log(err);
            }
        }
    };
    const addToFile = async (path, content) => {
        if (!addToFileToggle) {
            addToFileToggle = !addToFileToggle;
            console.log('TOGGLE:' + addToFileToggle);
            return;
        }
        console.log(`Adding to ${path}.`);
        console.log(`Content: ${content}.`);
        try {
            // Check whether the file already exists.
            fs.appendFile(path, content.trim(), 'utf-8');
            /**
             * we can also use: 'fs.open(path, "a")'
             *      -> const fileHandle = await fs.open(path, 'a); // 'a' means append.
             *      -> fileHandle.write(content);
             * IMP : the 'fs.appendFile()' also does the same thing internally, ie: opens with flag 'a' by default
             *      and then does fs.writeFile()
             *  */
            console.log('The content was successfully added.');
            addToFileToggle = !addToFileToggle;
        } catch (err) {
            if (err.code === 'ENOENT') {
                console.log(`The file ${path} does not exists.`);
            } else {
                console.log('An error occured while removing the file.');
                console.log(err);
            }
        }
    };

    try {
        const commandFileHandler = await fs.open('./command.txt', 'r'); // All 'FileHandle' objects are 'EventEmitters'.

        commandFileHandler.on('change', async () => {
            /** 
            1. open the file. 
                --> when we open a file, we are not actually moving the whole content of the file to our memory.
                --> we actually are just saving a unique number regarding that file, its called a 'FILE DESCRIPTOR'.
                --> Each opened file has its own file descriptor.

            2. read from or write into the file.
            3. Close the file.
                --> it leads to some errors like memory leaks if file opened and is not closed.
            */

            const size = (await commandFileHandler.stat()).size; // get the size() of our file.
            const buff = Buffer.alloc(size); // The buffer that the data will be written to.
            const offset = 0; // The position in buffer to write the data to.
            const length = buff.byteLength; // The number of bytes to read.
            const position = 0; // (<integer> | <bigint> | <null> )
            /** 
                --> Specifies where to begin reading from in the file.
                --> If position is null or -1 , data will be read from the current file position, 
                and the file position will be updated. 
                --> If position is an integer, the file position will be unchanged.
            */

            // we always want to read the whole content (from begining all the way to the end).
            await commandFileHandler.read(buff, offset, length, position);

            // decoder : takes(0s, 1s) => gives something meaningful.
            // encoder : meaningful => gives (0s, 1s).
            const command = buff.toString('utf-8');

            if (command.includes(CREATE_FILE)) {
                console.log('creating a new file');
                const filePath = command.substring(CREATE_FILE.length + 1);
                createFile(filePath);
            }
            if (command.includes(DELETE_FILE)) {
                console.log('deleting a file');
                const filePath = command.substring(DELETE_FILE.length + 1);
                deleteFile(filePath);
            }
            if (command.includes(RENAME_FILE)) {
                console.log('Renaming the file');
                const _idx = command.indexOf('to');
                const oldPath = command.substring(
                    RENAME_FILE.length + 1,
                    _idx - 1
                );
                const newPath = command.substring(_idx + 3);
                renameFile(oldPath, newPath);
            }
            if (command.includes(ADD_TO_FILE)) {
                console.log('Adding to a file');
                const _idx = command.indexOf('content:');
                const filePath = command.substring(
                    ADD_TO_FILE.length + 1,
                    _idx - 1
                );
                const fileContent = command.substring(_idx + 8);
                addToFile(filePath, fileContent);
            }
        });

        // Watcher...
        const watcher = fs.watch('./command.txt', { signal });
        for await (const event of watcher) {
            console.log(event);
            if (event.eventType === 'change') {
                commandFileHandler.emit('change');
            } else if (event.eventType === 'rename') {
                console.log('hjbhj');
                commandFileHandler.emit('rename');
            }
        }
    } catch (err) {
        if (err.name === 'AbortError') return;
        throw err;
    }
})();
