var isPalindrome = function (x) {
    x = x.toString();
    for (let i = 0; i < Math.floor(x.length / 2); i++) {
        if (x[i] !== x[x.length - 1 - i]) {
            return false
        }
    }
    return true

};