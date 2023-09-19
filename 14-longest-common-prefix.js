var longestCommonPrefix = function (strs) {
    let minStr = strs[0];
    for (let i = 1; i < strs.length; i++) {
        minStr = checkStrs(minStr, strs[i])
    }
    return minStr == undefined ? "" : minStr

};
var checkStrs = (min = "", str = "") => {
    for (let i = 0; i < min.length; i++) {
        if (min[i] !== str[i]) {
            return min.substring(0, i)
        }
    }
    return min
}