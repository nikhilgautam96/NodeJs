// import searching from './searching.cjs';

/*
import searching, { linearSearch, binarySearch } from './searching.js';
    --> In ES-Moduling always 'default' import comes first and followed by 'named' imports.
    --> named imports must use the same name as the exported name.
    --> default export can have any name.

const x = require('./searching.js'); // ReferenceError: require is not defined in ES module scope, 
    you can use import instead

console.log(searching);

*/

import searching from './searching.js';

console.log(searching); // { binarySearch: [Function: binarySearch], gun: [Function: gun] }
