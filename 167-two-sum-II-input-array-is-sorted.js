var twoSum = function (numbers, target) {
    var set = new Set(numbers);
    let i = 0;
    while (numbers.length > i) {
        if (set.has(target - numbers[i])) {
            const item = numbers.indexOf(target - numbers[i])
            if (i != item) {
                return item > i ? [i + 1, item + 1] : [item + 1, i + 1]
            }
        }
        i++;
    }
};