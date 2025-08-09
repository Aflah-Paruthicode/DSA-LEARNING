function sumOfEvenDigits (num) {
    
   let numArr = num.toString().split('').map(Number);
   let res = 0;
   
   for(let i = 0;i<numArr.length;i++) {
       if(numArr[i]%2 == 0) {
           res+= parseInt(numArr[i]);
       }
   }
   console.log(res)
   return res == 0 ? 'No Even Numbers' : res;
}

console.log(sumOfEvenDigits(12234))