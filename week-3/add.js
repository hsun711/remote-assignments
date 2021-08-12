function add(number){
    let result = 0;
    for(let i=0; i<=number; i++){
        result = result + i;
    }

    return result;
}

module.exports.add = add;