#!/usr/bin/env node
// using shabang we can make a file as an executable script.

// now we can run the file as an executable - './script.js'
// but we need to give execute permission - 'chmod 777 script.js'
console.log('Hello Nikhil');

console.log(process.argv);
/*
argv = 
    [
    '/usr/local/bin/node',
    '/Users/nikhil_gautam/Desktop/[05]Node/NodeJs/2-nodeJs-features/5-command-line-script/script.js',
    '--name=Nikhil',
    '--company=TCS'
    ]
*/

console.log(process.argv[2]); // --name=Nikhil
console.log(process.argv[3]); // --company=TCS
