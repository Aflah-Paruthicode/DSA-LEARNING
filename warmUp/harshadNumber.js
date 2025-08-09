function checkHarshadNumber (num) {
    
   let sumOfDigits = num.toString().split('').map(Number).reduce((accu,elem) => accu + elem,0);
   
   return num % sumOfDigits == 0 ? true : false
   
   
}

console.log(checkHarshadNumber(35))