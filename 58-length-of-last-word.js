var lengthOfLastWord = function (s) {
    let lastwordindex = s.lastIndexOf(" ");
    var count = 0;
    if (lastwordindex + 1 === s.length) {
        for (let i = lastwordindex - 1; i >= 0; i--) {
            if (s[i] == " ") {
                if (count > 0) break;
                continue;
            } else {
                count++;
            }
        }
    } else {
        var count = 0;
        for (let i = lastwordindex + 1; i < s.length; i++) {
            if (s[i] == " ") {
                if (count > 0) break;
                continue;
            } else {
                count++;
            }
        }
    }
    return count;
};