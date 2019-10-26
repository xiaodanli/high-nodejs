
#### WebSocket

WebSocket是HTML5新增的协议，它的目的是在浏览器和服务器之间建立一个不受限的双向通信的通道，比如说，服务器可以在任意时刻发送消息给浏览器。

#### ws

下载：npm i ws -S

#### webSocket没有同源的限制

#### 浏览器和服务器通信

发送消息：ws.send(消息)   消息 数据类型必须是string

接收消息：ws.on('message',msg => {console.log(msg)})

//对象  JSON.stringify()   JSON.parse()

#### webSocket协议



