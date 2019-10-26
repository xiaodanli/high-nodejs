#! /usr/bin/env node

//http-server -----------  起服务  8080

//http-server -p xxxx ---  起服务  xxxx

//http-server -v

let version = process.argv[2];

let port = 8080;  //-t

let app = require('../server/index');

console.log("bin",__dirname)

let versions = {
    '-v'(){
        let v = require('../package.json').version;

        console.log("当前的版本号是"+v)
    },
    '-p'(){
        port = process.argv[3] ? process.argv[3] : port;
        //起服务
        app.listen(port,() => {
            console.log("服务启动成功"+port)
        })
    }
}


if(!version){
    //没传
    versions['-p']();
}else{
    //传的
    versions[version]  && versions[version]()
}

