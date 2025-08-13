function countPosAndNegAndZero (arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    
    for(let i = 0;i<arr.length;i++) {
        if(arr[i] > 0) {
            pos++;
        } else if (arr[i] < 0) {
            neg++;
        } else {
           zero++; 
        }
    }
    return `Positives ${pos}, Negatives ${neg}, Zeros ${zero}`
}

console.log(countPosAndNegAndZero([1,2,3,4,0,-1,-4,0,0]))