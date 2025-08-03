
let array = [20,20,10];

const secondLarge = (arr) => {
    let largest = 0;
    let secondLargest = 0;
    
    if(arr.length == 0) {
        return 'array is empty';
    } else if (arr.length < 2) {
        return 'array dont have enough nubers';
    } else {

    for(let i = 0; i < arr.length ; i++ ) {
        if(arr[i] < 0) {
            return 'this program works only for positive numbers';
        }
        if(largest < arr[i]) {
            secondLargest = largest;
            largest = arr[i];
        } else if (secondLargest < arr[i] && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }
    }
    
    return secondLargest;
}

console.log(secondLarge(array));