const router = require('koa-router')();

const connect = require('../../controller');

router.post('/login',async (ctx) => {
    console.log(ctx.request.body);
    ctx.body = '登录成功'
})

//connect.query(sql语句,(error,data) => {})  异步查询

router.get('/userlist',async (ctx) => {
    console.log("===-=-=-")
    let res = await new Promise((resolve,reject) => {
        connect.query('select * from userlist',(error,data) => {
            if(error){
                reject(error)
            }else{
                resolve(data)
            }
        })
    })
    
    

    ctx.body = res;
})

module.exports = router;