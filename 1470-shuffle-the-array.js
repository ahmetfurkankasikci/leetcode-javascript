var shuffle = function (nums, n) {
    var expected = [];
    let j = 0;
    while (true) {
        for (let i = j; i < nums.length; i = i + n) {
            expected = [...expected, nums[i]]
        }
        if (expected.length == nums.length) return expected
        j++;
    }
};