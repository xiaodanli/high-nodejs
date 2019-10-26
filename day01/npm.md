#### npm (node package manager)  node包管理器

#### npm的功能

1>下载

    1)本地下载

        线上依赖   -----> dependencies字段
        
        npm install(i) <包名> --save/-S/省略不写

        开发依赖  ---> devDependencies字段

        npm install(i) <包名> --save-dev/-D

    2)全局下载

        npm i <包名> -g

        npm root -g  查看全局下载的路径

    指定版本：

        npm i <包名@版本号> 

##### 下载的流程：

    1>查询  npm search <包名>

    2>下载对应的压缩包

    3>解压到指定目录 

        全局指定解压目录：

            npm config set prefix <指定路径> 

            npm config get prefix   查看解压目录

    4>生成cmd文件

2>更新

3>卸载

#### package.json 包描述文件

生成package.json文件：npm init  npm init -y

根据package.json依赖去下载：npm i

#### 镜像

国外：http://registry.npmjs.org/

淘宝：https://registry.npm.taobao.org

设置镜像源：npm config set registry <镜像源地址>

查看镜像源地址：npm config get registry


#### NODE_PATH  配置查找全局包的路径

#### 包的查找规则：

1>node_modules文件查找规则

    当前文件夹下找 --->  层层往上找,直到磁盘根目录 ---> NODE_PATH 指定的路径下找

2>找对应包名的文件夹 ---> package.json 找main字段指定的文件  --->  index.js

#### npm 常用的命令

npm view <包名> versions 查看所有的版本号

#### 发包的流程

1>新建package.json文件  注：name的值不能和现有的包名冲突

2>新建js文件，  文件名:1>index.js 或  main字段指定的文件名

3>使用module.exports 抛出公用方法

4>在当前文件夹下打开命令行

5>npm login 登录npm 注：镜像源必须要是国外的镜像源

6>npm publish

7>npm unpublish <包名> --force  删除发布的包，超过24小时不能再删





