function delayedResult(n1, n2, delayTime, callback){
    const total = n1 + n2;

    setTimeout( function() {
        return callback(total);
    }, delayTime);
};

delayedResult(4, 5, 3000, function(result){
    console.log(result);
}); 

delayedResult(-5, 10, 2000, function(result){
    window.alert(result);
}); 
