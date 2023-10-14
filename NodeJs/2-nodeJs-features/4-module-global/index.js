// const searching = require('./searching');

// import searching from './searching'; // we cannot use import w/o ES moduling.

console.log(searching); // { linear: [Function: linearSearch], binary: [Function: binarySearch] }

console.log(searching.linear([1, 2, 3, 4, 5, 6], 4)); // 3
// console.log(module);
