#### cli

命令行界面（英语：command-line interface，缩写：CLI）是在图形用户界面得到普及之前使用最为广泛的用户界面，它通常不支持鼠标，用户通过键盘输入指令，计算机接收到指令后，予以执行。也有人称之为字符用户界面（CUI）。

#### process nodejs全局变量

process.argv :获取命令行参数 返回值是数组

第一项:node.exe所在的绝对路径

第二项:执行文件所在的绝对路径

第三项以后都是参数 process.argv.slice(2)

