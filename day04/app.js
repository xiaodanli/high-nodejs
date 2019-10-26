let http = require('http');

let os = require('os');

// console.log(os.cpus().length); //[{},{},{}]

// console.log(process.pid);

// let server = http.createServer((req,res) => {
//     console.log("请求")
//     res.end('ok')
// })

// server.listen(3000,() => {
//     console.log("服务启动成功")
// })

//创建子进程   4种  exec spawn execFile(不常用) fork 

//exec:处理数据量小的时候

// child_process  nodejs内置模块 

// let child_process = require('child_process');

// let pro1 = child_process.exec('node ./child.js -v',(error,stdout,stderr) => {
//     if(error){
//         console.log(error);
//         return 
//     }
//     console.log('stdout'+stdout);
//     console.log('stderr'+stderr);
// })

// pro1.on('exit',(code) => {
//     console.log(code)
// })

// console.log(pro1.pid)

// let pro2 = child_process.exec('node ./child2.js -v',(error,stdout,stderr) => {
//     if(error){
//         console.log(error);
//         return 
//     }
//     console.log('stdout'+stdout);
//     console.log('stderr'+stderr);
// })

// console.log("pro2",pro2.pid) //

// let pro3 = child_process.spawn('node',['./child.js','-v'])

// pro3.stdout.on('data',data => {
//     console.log('stuout'+data)
// })

// pro3.stderr.on('data',data => {
//     console.log("stderr"+data)
// })

// pro3.on('close',(code) => {
//     //code
//     console.log(code)
// })

// console.log(pro3.pid)

//1.cpu的个数

const cpuLen = require('os').cpus().length;

const cluster = require('cluster');

console.log("=====",process.pid) //1.主进程 2.第一个子进程  3.第二个子进程id

if(cluster.isMaster){ //判断是否是主进程
    //主进程
    for(let i = 0;i<cpuLen;i++){
        cluster.fork()
    }
}else{
    //子进程
    http.createServer((req,res) => {
        res.end('ok')
    }).listen(3000,() => {
        console.log("服务启动成功")
    })
}