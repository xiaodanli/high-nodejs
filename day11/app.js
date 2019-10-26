const WebSocket = require('ws');

const WebSocketServer = WebSocket.Server;

const wss = new WebSocketServer({
    port:3000
})

let group = [];

wss.on('connection',socket => {
    console.log("打开连接")
    socket.on('message',message => {
        console.log(message);
        let msg = JSON.parse(message);
        if(msg.action === 'start'){
            socket.answer = [];//答案数组
            group.push(socket);
            if(group.length === 2){
                group.forEach(item => {
                    console.log("===")
                    item.send(JSON.stringify({action:"play"}))
                })
            }
        }else if(msg.action === 'answer'){
            socket.answer.push(msg.val);
            next(); //下一题
        }else if(msg.action === 'over'){
            over()
        }
    })

    // setInterval(() => {
    //     ws.send("周杰伦出新歌")
    // },1000)
})

//下一题
function next(){
    //两个人都选
    if(group[0].answer.length === group[1].answer.length){
        group.forEach(item => {
            item.send(JSON.stringify({action:'next'}))
        })
    }
}

let isResult = false; //没有计算
//游戏结束
function over(){
    if(isResult)return;

    let num1 = group[0].answer.reduce((pre,cur) => {
        return pre+cur
    },0)

    let num2 = group[1].answer.reduce((pre,cur) => {
        return pre+cur
    },0)

    console.log(num1,num2)

    if(num1 > num2){
        group[0].send(JSON.stringify({action:'result',msg:'赢'}))
        group[1].send(JSON.stringify({action:'result',msg:'输'}))
    }else if(num1 == num2){
        group[0].send(JSON.stringify({action:'result',msg:'平'}))
        group[1].send(JSON.stringify({action:'result',msg:'平'}))
    }else {
        group[0].send(JSON.stringify({action:'result',msg:'输'}))
        group[1].send(JSON.stringify({action:'result',msg:'赢'}))
    }
    isResult = true;
}