const fs = require('fs');

let rs = fs.createReadStream('./process-1.wmv');

let ws = fs.createWriteStream('./2.wmv');


// rs.on('data',(chunk) => {
//     console.log(chunk)
//     if(!ws.write(chunk)){  //判断是否写完
//         rs.pause();  //停止读
//     }
// })

// //写完触发的事件
// ws.on('drain',() => {
//     rs.resume();  //重新开始读
// })

// rs.on('end',() => {
//     console.log("读取完毕")
// })

//pipe()

rs.pipe(ws);