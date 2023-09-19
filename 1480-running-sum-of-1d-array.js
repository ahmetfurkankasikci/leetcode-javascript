var runningSum = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr[i] = nums.slice(0, i + 1).reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    }
    return arr;
};