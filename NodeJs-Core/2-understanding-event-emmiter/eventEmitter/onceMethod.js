const eventEmitter = require('events');
class Emitter extends eventEmitter {}

/**
 *          'ONCE' method
 * -> using once() method, the listener only executes once doesn't matter how many times we emit the object.
 * -> what is happend behind the scene :-
 *      --> when we use once method to register the events, the event is popped from the master object after its first emit.
 */

const myEvent2 = new Emitter(); // I can now make use of those properties that the 'eventEmitter' object has.

myEvent2.on('foo', () => {
    console.log('Foo 1 event occurred.');
});
myEvent2.on('foo', () => {
    console.log('Foo 2 event occurred.');
});
myEvent2.once('foo', (x) => {
    console.log(`Foo 3 event occurred with parameter - ${x}`);
});

myEvent2.on('bar', (x) => {
    console.log(`Bar event occurred.`);
});

myEvent2.emit('foo');
myEvent2.emit('foo', 'Name: Nikhil Gautam');

myEvent2.emit('bar');

// Foo 1 event occurred.
// Foo 2 event occurred.
// Foo 3 event occurred with parameter - undefined
// Foo 1 event occurred.
// Foo 2 event occurred.
// Bar event occurred.
