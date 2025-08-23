let numberGame = function(nums) {

    nums.sort((a,b) => a-b)
  
    let array = []
    let alice = 0
    let bob = 0
    for(let i =0;i<nums.length;i+= 2) {
        alice = nums[i]
        bob = nums[i+1]

        array.push(bob,alice)
    }

    return array
    
};

console.log(2)