const childProcess = require('child_process');

const http = require('http');

const cpuLen = require('os').cpus().length;

const server = http.createServer();

server.listen(3000)

let workers = {};

function createWorker(){
    let worker = childProcess.fork('./worker.js');

    console.log(worker.pid)

    worker.send('server',server); //主进程服务器

    workers[worker.pid] = worker;

    

    worker.on('message',(msg) => {
        if(msg.msg === 'error'){
            console.log('error'+worker.pid)
            //异常
            //重启
            delete workers[worker.pid]
            createWorker()
        }
    })

    worker.on('exit',() => {
        console.log("结束"+worker.pid)
        delete workers[worker.pid]
        createWorker()
    })
}

for(let i = 0;i<cpuLen;i++){
    //创建子进程
    createWorker()
}

process.on('exit',() => {
    for(let pid in workers){
        workers[pid].kill();
    }
})

