var longestConsecutive = function (nums) {
    let sum = 1;
    let i = 0;
    let max = 1;
    if (nums.length === 0) return 0;
    nums = nums.sort((a, b) => a - b);
    while (i < nums.length) {
        if (nums[i] === nums[i + 1]) { }
        else if (nums[i] + 1 === nums[i + 1]) { sum++ }
        else if (sum > max) {
            max = sum
            sum = 1
        } else {
            sum = 1
        }
        i++;
    }
    return max;
};