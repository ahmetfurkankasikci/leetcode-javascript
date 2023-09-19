var isHappy = function (n) {
    while (n == 1 || n > 4) {
        const sum = Array.from(String(n), Number).reduce((total, num) => {
            return total + num * num;
        }, 0)
        if (sum === 1) return true;
        n = sum
    }
    return false;
};