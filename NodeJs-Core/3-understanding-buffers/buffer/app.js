const { Buffer } = require('buffer'); // buffer is available globally, but in big application we usually import it as well.

const buff = Buffer.alloc(8); // we allocate a fixed length = 8-bytes of storage.
console.log(buff); // <Buffer 00 00 00 00 00 00 00 00> : each integer is expressed in Hexadecimal numbers.

buff.write('Nik', 'utf-8'); // Since `buffers` only supports binary data we need to give character encodings to it.
console.log(buff); // <Buffer 4e 69 6b 00 00 00 00 00>
console.log(buff.toJSON());
/**
 {
  type: 'Buffer',
  data: [78, 105, 107, 0, 0, 0, 0, 0]
 }
 */
console.log(buff.toString()); // Nik
console.log(buff.length); // 8
console.log(buff[0]); // 78

const buff2 = Buffer.from([115, 116, 114, 105, 110, 103], 'hex');
console.log(buff2.toString('utf-8')); // string
