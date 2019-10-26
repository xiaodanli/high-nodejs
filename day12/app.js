const Koa = require('koa');
const app = new Koa();

const server = require('http').Server(app.callback());

const io = require('socket.io')(server);

const port = 8081;

server.listen(process.env.PORT || port,() => {
    console.log(`app run at :http://localhost:${port}`)
})

let users = []; //[{username:'qq'},{username:'zs'}...]

io.on('connection',(socket) => {
    let username = '';
    // 监听登录
    socket.on('login',(data) => {
        console.log(data) //{username:'qq'}
        let ind = users.findIndex(item => item.username === data.username)
        if(ind === -1){
            //没有，新用户
            users.push(data);
            socket.emit('loginSuccess',data);
            io.sockets.emit('join',data);
            username = data.username;
        }else{
            //已经存在
            socket.emit('loginFail','')
        }

    })

    socket.on('disconnect',() => {
        io.sockets.emit('leave',username);
        users.forEach((item,index) => {
            if(item.username === username){
                users.splice(index,1);
            }
        })
    })

    socket.on('sendMsg',data => {
        io.sockets.emit('msg',data)
    })
})