const eventEmitter = require('./events');
class Emitter extends eventEmitter {}
const myEvent = new Emitter();

myEvent.on('foo', () => {
    console.log('Foo 1 event occurred.');
});
myEvent.on('foo', () => {
    console.log('Foo 2 event occurred.');
});
myEvent.once('foo', (x) => {
    console.log(`Foo 3 event occurred with parameter - ${x}`);
});

myEvent.on('bar', (x) => {
    console.log(`Bar event occurred.`);
});

myEvent.emit('foo');
myEvent.emit('foo', 'Name: Nikhil Gautam');

myEvent.emit('bar');

/**
 * Foo 1 event occurred.
 * Foo 2 event occurred.
 * Foo 3 event occurred with parameter - undefined.
 * Foo 1 event occurred.
 * Foo 2 event occurred.
 * Bar event occurred.
 */
