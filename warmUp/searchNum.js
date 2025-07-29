function searchNumber (array,num) {

    for(let i = 0;i<array.length;i++) {
        if(array[i] == num) return i;
    }

    return -1;
};

const arr = [1,2,4,5,2,8,19,83,57];
console.log(searchNumber(arr,3));
console.log(searchNumber([2,3,5,6,4,3],3));

// taking two parameters, one array and a number.
// if the number matches to any of the array element, then return the index otherwise return -1;
