// below package is by default installed with nodeJs.
// const fs = require('fs'); // for callback based syntax
// const fs = require('fs/promises'); // for promise based syntax

// We are trying to mimic a basic 'Templating Engine'.
import { error, log } from 'console';
import { readFile, writeFile } from 'fs/promises';

try {
    const filePath = new URL('./index.html', import.meta.url);
    // in ES-module, we can use 'await' at the top level of the module w/o async.
    // but mot iside a function block, in that case function needs to be an async function.
    let data = await readFile(filePath, { encoding: 'utf8' });
    console.log(typeof data); // string, if we remove encoding --> type: object.
    console.log(data);
    /*
        string
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <h1>{title}</h1>
                <p>{body}</p>
            </body>
        </html>
    */
    const obj = {
        title: 'My Custom Title',
        body: 'Custom body',
    };
    for (const [key, value] of Object.entries(obj)) {
        data = data.replace(`{${key}}`, value);
    }

    await writeFile(filePath, data);
} catch (err) {
    console.error(err.message);
}
