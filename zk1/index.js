let arr = [1,2,3,4]; //10

console.log(arr)

let sum = arr.reduce((pre,cur) => {
    return pre+cur
},10)


Array.prototype.myReduce = function(callback,init){
    let startIndex = 0;

    if(init){
        //有初始值  init 
        
    }else{
        //没有初始值  this[0]
        init = this[0]; //1
        startIndex = 1;
    }

    for(let i = startIndex;i<this.length;i++){
        init = callback(init,this[i],i,this)
    }


    return init
}

let result = arr.myReduce((pre,cur,index,arr) => {
    return pre+cur
},0);
console.log("====",result)





