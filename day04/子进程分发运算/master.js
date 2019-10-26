const http = require('http');

const child = require('child_process');

const server = http.createServer((req,res) => {
    if(req.url === '/count'){
        //1.创建子进程
        let pro1 = child.fork('./child.js');
        //2.
        pro1.on('message',sum => {
            console.log(sum)
            res.end(sum.toString())
        })
        
        pro1.send('主进程向子进程传递数据')
    }
})

server.listen(3000,()=>{
    console.log("服务启动成功")
})

//进程之间的通讯： send方法  message事件