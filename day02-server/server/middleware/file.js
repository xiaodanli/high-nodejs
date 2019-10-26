const fs = require('fs');

const path = require('path');

const rootDir = process.cwd();

console.log(rootDir);

module.exports = (req,res,next) => {
    console.log(req.path)
    let filePath = path.join(rootDir,req.path);
    //1.
    if(fs.existsSync(filePath)){
        if(fs.statSync(filePath).isDirectory()){
            let list = fs.readdirSync(filePath);
            console.log(list)
            res.render('list.ejs',{
                list
            })
        }else{
            next()
        }
    }else{
        next();
    }
}