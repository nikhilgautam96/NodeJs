# Events :-

-   Much of the `Node.js core API is built around an idiomatic asynchronous event-driven architecture` in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.
-   eg:-

    1. a `net.Server` object emits an event each time a peer connects to it;
    2. a `fs.ReadStream` emits an event when the file is opened;
    3. a `stream` emits an event whenever data is available to be read.

-   When the EventEmitter object emits an event, all of the `functions attached to that specific event are called synchronously`. Any values returned by the called listeners are ignored and discarded.

# Understanding the Event-Driven Nature of OS

-   REAL EXAMPLE of EVENT DRIVEN :
    -   In our OS we can see that when we press a key from keyboard the event associated with that key happens.
    -   this can be handled in 2 ways;
        1. Synchronous :
            - let say our CPU has 2 cores, we can allocate 1 core/thread to constantly check for key press.
              In this way one of the cores/thread is constantly engaged in checking the key press.
        2. Asynchronous :
            - In this way we actually issue a command/instruction (say entrop) and we register this command using a programming construct in such a way that whenever the key press with such command happens the associated event occurs and the registered function/procedure is executed.
            - This is called as 'EVENT DRIVEN'.

# Understanding the Event-Driven Nature of Node.js

-   When we are using the event emitter object in JS, we have a master OBJECT : myEvent = {}

    -   when we do,

        1. object.on('foo', () => {...})
        2. object.on('foo', (x) => {...})
        3. object.on('foo', (y) => {...})
        4. object.on('bar', () => {...})

        -   we are actually pushing the functions associated with the command 'foo' to this master object.
        -   like foo = {foo: ()=>{...}, foo: (x)=>{...}, foo: (y)=>{...}, bar: (y)=>{...}}

    -   when we emit something we emit an event, this means;
        -   object.emit('foo');
        -   it will loop through the master object and run all/only those functions associated with the event named = 'foo'.
        -   the sequece is same as written in code.
        -   we can even pass parameters while emitting. eg :- object.emit('foo', 'param_1');

# Passing arguments and this to listeners :

-   This points to the same Event object on whuich we are registering the events.

```js
const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', function (a, b) {
    console.log(a, b, this, this === myEmitter);
    // Prints:
    //   Nik Gtm
    //   MyEmitter {
    //     _events: [Object: null prototype] { event: [Function (anonymous)] },
    //     _eventsCount: 1,
    //     _maxListeners: undefined,
    //     [Symbol(kCapture)]: false
    //   }
    //   true
});
myEmitter.emit('event', 'Nik', 'Gtm');
```

-   but using arrow functions this won't point to the same event object.

```js
const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log(this);
    // Prints: {}
});
myEmitter.emit('event');
```

# Once Method on Emitter Object

```js
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
```

# Creating Our Own Version of EventEmitter
