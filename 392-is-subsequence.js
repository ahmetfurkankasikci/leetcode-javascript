var isSubsequence = function (s, t) {
    let sum = 0
    for (let i = 0; i < t.length; i++) {
        if (s[sum] === t[i]) { sum++ };
    }
    return sum === s.length;
};