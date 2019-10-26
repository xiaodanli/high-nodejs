const mysql = require('mysql');

const connection = mysql.createConnection({
    user:'root',
    password:'root',
    host:'localhost',
    port:'3306',
    database:'1704d'
})

connection.connect((error) => {
    if(error){
        console.log("数据库连接失败")
    }else{
        console.log("数据库连接成功")
    }
})

module.exports = connection