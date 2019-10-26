//发布订阅模式

//发布  触发一个函数

//订阅  添加事件

let events = require('events');

let eventsEmitter = new events.EventEmitter();

eventsEmitter.on('someEvent',(num1,num2) => {
    console.log("订阅1",num1,num2)
})

let callback = () => {
    console.log("订阅2")
}

eventsEmitter.on('someEvent',callback)

eventsEmitter.removeAllListeners('someEvent')


eventsEmitter.emit('someEvent',1,4);

eventsEmitter.emit('someEvent',1,4);

// addEventListener('click',() => {

// })

// removeEventListener('click',() => {

// })

var obj = {
    name:'A nice demo',
    fx:function(){
        alert(this.name)
    }
}

window.name = 'window name'
function runFn(f){
    console.log(f);
}

var fx2 = obj.fx.bind(obj);

runFn(fx2);



