In Node.js, the event loop is built around a single, efficient queue known as the "event queue" or "message queue." This single queue is responsible for handling all types of events, including I/O operations, timers, and other asynchronous tasks. The event loop processes events from this queue in a non-blocking and efficient manner.

The event queue in Node.js can be divided into several phases, each responsible for a specific type of event. These phases include:

1. **Timers:** This phase handles events scheduled by `setTimeout()` and `setInterval()`.

2. **Pending Callbacks:** In this phase, system-level callbacks are processed. These can include callbacks from network operations, file system operations, and other asynchronous tasks.

3. **Idle, Prepare:** These are internal phases used by the event loop.

4. **Poll:** The poll phase is where most of the work happens. It checks for new I/O events (e.g., data available to read from a socket) and executes callbacks related to those events. If no events are pending, it can block or wait for events to arrive.

5. **Check:** This phase is used to execute `setImmediate()` callbacks. It runs after the poll phase if the event loop's poll queue is empty and there are `setImmediate()` callbacks to execute.

6. **Close Callbacks:** This phase handles the closing of sockets and other resources, executing callbacks registered for these events.

While there are multiple phases in the event loop, they all share a common event queue. Events are processed in the order they were added to the queue. The event loop's efficient design ensures that it can handle many events simultaneously, making Node.js suitable for handling high levels of concurrency and I/O-intensive tasks.

It's important to note that the event loop in Node.js is a single-threaded event-driven model. While it can handle multiple events concurrently through asynchronous operations, it still operates within a single thread, ensuring that JavaScript code executes in a non-blocking manner.
