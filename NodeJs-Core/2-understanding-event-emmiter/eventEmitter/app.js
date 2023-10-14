const eventEmitter = require('events');
/**
    --> this 'events' source code has nothing to do with { event loop | libuv | asynchronous code, etc. }.
    --> there is no c++ code behind, its pure JS.
    --> `NodeJS is EVENT DRIVEN` : 
        |-> we issue commands/instructions to the computer and we wait to respond to those commands in an asynchronous manner.
    
    REAL EXAMPLE of EVENT DRIVEN :
        -> In our OS we can see that when we press a key from keyboard the event associated with that key happens.
        -> this can be handled in 2 ways;
            1. Synchronous :
                -> let say our CPU has 2 cores, we can allocate 1 core/thread to constantly check for key press.
                    In this way one of the cores/thread is constantly engaged in checking the key press.
            2. Asynchronous :
                -> In this way we actually issue a command/instruction (say entrop) and we register this command using a programming 
                    construct in such a way thatg whenever the key press with such command happens the associated event occurs and the 
                    registered function/procedure is executed.
                -> This is called as 'EVENT DRIVEN'.
*/
/**
 * When we are using the event emitter object in JS, we have a master OBJECT : myEvent = {}
 *  -> when we do :
 *          1. object.on('foo', () => {...})
 *          2. object.on('foo', (x) => {...})
 *          3. object.on('foo', (y) => {...})
 *          4. object.on('bar', () => {...})
 *      -> we are actually pushing the functions associated with the command 'foo' to this master object.
 *      -> like foo = {foo: ()=>{...}, foo: (x)=>{...}, foo: (y)=>{...}, bar: (y)=>{...}}
 *
 *  -> when we emit something we emit an event, this means;
 *      -> object.emit('foo');
 *      -> it will loop through the master object and run all/only those functions associated with the event named = 'foo'.
 *      -> the sequece is same as written in code.
 *      -> we can even pass parameters while emitting. eg :- object.emit('foo', 'param_1');
 */
class Emitter extends eventEmitter {}

const myEvent = new Emitter(); // I can now make use of those properties that the 'eventEmitter' object has.

myEvent.on('foo', () => {
    console.log('Foo 1 event occurred.');
});
myEvent.on('foo', () => {
    console.log('Foo 2 event occurred.');
});
myEvent.on('foo', (x) => {
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
 * Foo 3 event occurred with parameter - Name: Nikhil Gautam.
 * Bar event occurred.
 */
