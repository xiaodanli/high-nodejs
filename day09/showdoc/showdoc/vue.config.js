module.exports = {
    devServer:{
        proxy:{
            '/':{
                target:'http://localhost:7001'
            }
        }
    }
}