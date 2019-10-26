const WebSocket = require('ws');

const WebSocketServer = WebSocket.Server;

const wss = new WebSocketServer({
    port:3000
})

wss.on('connection',ws => {
    console.log("打开连接")
    ws.on('message',msg => {
        console.log(msg)
        ws.send('hello client');
    })

    setInterval(() => {
        ws.send("周杰伦出新歌")
    },1000)
})

