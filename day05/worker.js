const http = require('http');

const childServer = http.createServer((req,res) => {
    //处理业务逻辑
    if(req.url === '/list'){
        res.end('list')
    }else if(req.url === '/error'){
        re.end('error')
    }else{
        res.end('ok')
    }
})


process.on('message',(flag,server) => {
    if(flag === 'server' && server){
        //服务器
        server.on('connection',info => {
            childServer.emit('connection',info)
        })
    }
})

// process.on('uncaughtException',() => {
//     //捕捉异常
//     process.send({msg:'error'})
// })