let inquirer = require('inquirer');
let program = require('commander')

const promptList = [
    // 具体交互内容
    {
        type: "input",
        message: "请输入用户名",
        name: "name"
    },
    {
        type:'password',
        message:'请输入密码',
        name:'pwd'
    },
    {
        type:'input',
        message:'请输入邮箱',
        name:'email'
    }
];

function loginFun(){
    inquirer.prompt(promptList).then(answers => {
        let {name,pwd,email} = answers;
        if(name === 'lixd' && pwd === '123'){
            console.log("登录成功")
        }
    })
}

program
    .version('1.0.0')
    .command('login')
    .action(loginFun)

program.parse(process.argv);

//npm login