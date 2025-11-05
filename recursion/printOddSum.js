

let array = [1,2,4,32,5,60,3,5,1,1]

function sumOfOdds(n) { 
    let isOdd = array[n] % 2 != 0
    if(n == 0) {
        return isOdd ? array[n] : 0;
    }
    return (isOdd ? array[n] : 0) + sumOfOdds(n-1)
}
console.log(sumOfOdds(array.length-1))