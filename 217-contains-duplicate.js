var containsDuplicate = function (nums) {
    if (nums.length == new Set(nums).size) return false

    return true;
};