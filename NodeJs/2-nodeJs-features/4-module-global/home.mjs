// this file with extension '.mjs' is ES module.

import searching from './searching.js';

console.log(searching); // { linear: [Function: linearSearch], binary: [Function: binarySearch] }

console.log(searching.linear([1, 2, 3, 4, 5, 6], 4)); // 3
