'use strict'
function divideArray(nums) {
    let evenNums = [];
    let oddNums = [];
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            evenNums.push(nums[i]);
        }
        else {
            oddNums.push(nums[i]);
        }

    }
    console.log("Even Numbers")
    if (evenNums.length !== 0) {
        for (let i = 0; i < evenNums.length; i++) {
            console.log(evenNums[i])

        }
    }
    else console.log("None");
    console.log("Odd Numbers")
    if (oddNums.length !== 0) {
        for (let i = 0; i < oddNums.length; i++) {
            console.log(oddNums[i])

        }
    }
    else console.log("None");

}