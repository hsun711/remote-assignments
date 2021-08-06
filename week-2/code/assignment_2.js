//First Way
function cal(n1,n2){
    this.n1 = n1;
    this.n2 = n2;

    this.add = function(){
        console.log(Number(this.n1)+Number(this.n2));
    }
    this.minus = function(){
        console.log(Number(this.n1)-Number(this.n2));
    }
}

const test1 = new cal(5,3);
test1.add();
test1.minus();

//Second Way
class Calculate{

    constructor(n1, n2, op){
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
    }

    math(){
        if(this.op === "+"){
            console.log(Number(this.n1)+Number(this.n2));
        } else if(this.op === "-"){
            console.log(Number(this.n1)-Number(this.n2));
        }else{
            console.log("Not supported");
        }
    }
}

const test2 = new Calculate(7,2,"+");
test2.math();

