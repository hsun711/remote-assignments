function twoSum(num,target){
    
    for(let i=0; i<num.length; i++){
        for(let j=i+1; j<num.length; j++){
            if( num[i] + num[j] == Number(target) ){
                console.log(`[${i},${j}]`);
            }
            
        }
    }
}

twoSum([2, 7, 11, 15],18);
