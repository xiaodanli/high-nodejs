let buf = Buffer.from('a');

console.log(buf);

let bufb = Buffer.from('b');

console.log(bufb);

let total = Buffer.concat([buf,bufb]);

console.log(total.toString())