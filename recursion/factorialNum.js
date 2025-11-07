

let num = 5; 

function factorialNum (a) { 
    if(a == 1) return a;
    
    return a = a * factorialNum(a-1)
}

console.log(factorialNum(num))