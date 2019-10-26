const addBigNum  = (num1,num2) => {
    if(typeof num1 !== 'string' || typeof num2 !== 'string'){
        console.log("数据有问题")
        return 
    }

    num1 = num1.split('').reverse();

    num2 = num2.split('').reverse();

    let maxLen = Math.max(num1.length,num2.length);

    let extNum = 0; //不进位

    let arr = [];  //所有位的和  [1,1,2]  [2,1,1]  211

    for(let i = 0; i<maxLen;i++){
        let temp1 = num1[i] || 0;

        let temp2 = num2[i] || 0;

        let tempSum = Number(temp1)+Number(temp2);

        tempSum += extNum;

        extNum = tempSum >= 10?1:0;

        if(i === (maxLen-1)){
            arr.push(tempSum)
        }else{
            arr.push(tempSum%10)
        }

        
    }

    return arr.reverse().join('')

}

// addBigNum('362323352346245657567','11567567656747')

module.exports = addBigNum
