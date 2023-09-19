const isPrevDuplicate = (nums, index) => nums[index - 1] === nums[index];

const isNextDuplicate = (nums, index) => nums[index] === nums[index + 1];
var threeSum = function (nums) {
    let sums = [];
    nums = nums.sort((a, b) => { return a - b })
    for (first = 0; first < nums.length - 2; first++) {
        if (isPrevDuplicate(nums, first)) continue;
        if (search(first + 1, -nums[first], nums) !== [])
            sums = [...sums, ...search(first + 1, -nums[first], nums)]
    }
    return sums;

};
function search(second, target, nums) {
    let three = nums.length - 1;
    let first = second - 1;
    let sums = [];
    while (second < three) {
        if (nums[second] + nums[three] === target) {
            sums = [...sums, [nums[first], nums[second], nums[three]]];
            second++;
            three--;
            while (second < three && isPrevDuplicate(nums, second)) second++;
            while (second < three && isNextDuplicate(nums, three)) three--;
        }
        else if (target > nums[second] + nums[three]) {
            second++;
        } else {
            three--;
        }

    }
    return sums;
}