var pivotIndex = function (nums) {
    let leftsum = 0;
    let rightsum = 0;
    nums.forEach((item) => (rightsum += item));
    for (let i = 0; i < nums.length; i++) {
        rightsum -= nums[i];
        if (leftsum == rightsum) return i;
        leftsum += nums[i];
    }
    return -1;
};