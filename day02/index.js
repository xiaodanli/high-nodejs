#! /usr/bin/env node
// let fs  = require('fs');

// console.log("国庆放假8.5天")

// console.log(process.argv.slice(2))

// let flag = process.argv[2];
// if(flag === '-v'){
//     console.log("v1.0.0")
// }else if(flag === 'create'){
//     console.log("初始化项目")
// }

let program = require('commander');

let {version} = require('./package.json');

// program
//     .version(version,'-v,--version')
//     const program = require('commander');

program
    .version('1.0.0')
    .option('-a,--add <filename>','add something')
    .option('-u,--update','update something')
    .option('-r,--remove','remove somthing')
    .parse(process.argv)
    
    console.log('You choose:');

    console.log(program.add)

    if(program.add) console.log(' add somthing')
    if(program.update) console.log(' update something')
    if(program.remove) console.log(' remove something')