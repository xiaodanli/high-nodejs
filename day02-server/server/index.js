const express = require('express');

const app = express();

const path = require('path');

console.log("server",__dirname);

const file = require('./middleware/file');

//中间件  ---->  函数  ---> app.use()

//设置静态资源目录

let rootDir = process.cwd();

app.use(express.static(rootDir));

//设置模板引擎  ejs

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(file)

module.exports = app;