const randomClass  = (total,num) => {
    let arr = [];
    for(let i = 1;i<=total;i++){
        arr.push(i);
    }

    let len = Math.floor(total/num); // 70 3  ---23 23 24

    let resultArr = [];

    for(let a = 0;a<num;a++){
        let newClass = [];
        for(let n = 0;n<len;n++){
            //1.随机数
            let ind = Math.floor(Math.random()*arr.length)  //0-70

            //2.定位人员，newClass
            newClass.push(arr[ind])
            

            //3.arr删除定位人员

            arr.splice(ind,1);
        }


        if(a === (num-1)){
            newClass = [...newClass,...arr]
        }
        console.log(newClass)
        resultArr.push(newClass);
    }

    return resultArr   //[[],[],[]]
}

// randomClass(11,3)

module.exports = randomClass

/**
 * 1.函数的参数
 * 
 * 2.函数的功能
 * 
 * 3.函数的返回值
 * 
 * 4.函数的调用
 * */ 