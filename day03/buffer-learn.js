// console.log(Buffer);

// 创建buffer

//Buffer.from(，[编码格式])  //注意:不能单独传数字，如果想传数字要以数组的形式传递 ，编码格式省略时，默认是utf-8

let buf1 = Buffer.from('你好','ASCII'); 

console.log(buf1);

//编码是ascii码时，一个中文对应两个字节
//utf-8编码格式,一个中文对应三个字节


let buf2 = Buffer.alloc(20,'a');

// ;
buf2[0] = 98;

// console.log(buf1.length)

buf2.write('c',2) //覆盖式写

console.log(buf2.toString('Base64'));


console.log(buf1.copy(buf2,2))

console.log(buf2)

let m = 'hello'

let n = 'world'

console.log(m+n);

let hBuf = Buffer.from('hello');

let wBuf = Buffer.from('world');

let totalBuf = Buffer.concat([hBuf,wBuf],2);

console.log(totalBuf.toString())

console.log(Buffer.byteLength('sdsd'));

