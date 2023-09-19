var containsNearbyDuplicate = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < k + i + 1; j++) {
            if (nums[i] === nums[j]) return true
        }
    }
    return false
};