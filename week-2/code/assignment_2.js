//First Way
let math = {}

function calculate(args){
    let result;
    if(args.op === "+"){
        result = Number(args.n1)+Number(args.n2);
    } else if(args.op === "-"){
        result = Number(args.n1)-Number(args.n2);
    }else{
        result = "Not supported";
    }
    console.log(result);
}

calculate({n1:15,n2:2,op:"-"});




//Second Way
class Math{

    constructor(n1, n2, op){
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
    }
}

function calculate(args){
    let result;
    if(args.op === "+"){
        result = Number(args.n1)+Number(args.n2);
    } else if(args.op === "-"){
        result = Number(args.n1)-Number(args.n2);
    }else{
        result = "Not supported";
    }
    console.log(result);
}

const test2 = new Math(7,2,"+");
calculate(test2);