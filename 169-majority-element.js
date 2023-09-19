var majorityElement = function (nums) {
    let map = new Map();
    if (nums.length == 1) return nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            var sub = map.get(nums[i])
            map.set(nums[i], sub + 1)
            if (sub + 1 > nums.length / 2) return nums[i]

        } else {
            map.set(nums[i], 1)
        }
    }
};