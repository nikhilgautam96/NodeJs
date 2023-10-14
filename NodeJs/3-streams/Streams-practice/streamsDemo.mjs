import { createReadStream } from 'fs';
import { Transform } from 'stream';

// Create a URL object representing the file './input.txt' relative to the current module.
const url = new URL('./input.txt', import.meta.url);

// Create a readable stream from the file.
let fileStream = createReadStream(url);

// Create a writable stream for the standard output (console).
let outputStream = process.stdout;

// Create a Transform stream.
// For each chunk of data that enters the Transform stream (middleStream in your code),
// the transform function is automatically invoked.
let middleStream = new Transform({
    transform(chunk, enc, nextCB) {
        // Convert the chunk to uppercase.
        let modifiedChunk = chunk.toString().toUpperCase();

        // Push the modified chunk to the next stream in the pipeline.
        this.push(modifiedChunk);

        // Add a delay of 5 seconds before processing the next chunk.
        setTimeout(nextCB, 5000);
    },
});

// Pipe the fileStream through the middleStream, and then pipe the result to the outputStream.
// fileStream --to--> middleStream --to--> outputStream.
fileStream.pipe(middleStream).pipe(outputStream);
