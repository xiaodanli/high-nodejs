let getParams = (() => {
    let str = document.cookie; //name=zs&age=19
    let arr = str.split('; '); //[name=zs,age=19]
    let params = {};
    arr.forEach(item => {
        let obj = item.split('=');  //[name,zs] [age,19]
        params[obj[0]] = obj[1]; //{name:zs,age:19}
    })
    return (key) => {
        return params[key]
    }
})()

export default getParams