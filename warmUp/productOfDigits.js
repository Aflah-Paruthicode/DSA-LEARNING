 function productOfDigitsOfANumber (num) {
     let numArr = num.toString().split('').map(Number);
     let res = numAr[0];
     for(let i = 1;i<numArr.length;i++) {
         res = res * numArr[i]
     }
     return res;
 }
 
 console.log(productOfDigitsOfANumber(452))