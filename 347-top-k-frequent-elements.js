var topKFrequent = function (nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {

        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)

        } else {
            map.set(nums[i], 1)
        }

    }
    let arr = [...map].sort((a, b) => b[1] - a[1])
    let ret = []
    for (let i = 0; i < k; i++) {
        ret = [...ret, arr[i][0]]
    }
    return ret;
}