var lengthOfLongestSubstring = function (s) {
    var longest = 0;
    var nt = "";
    for (let i = 0; i < s.length; i++) {
        if (nt.includes(s[i])) {
            if (nt.length > longest) longest = nt.length;
            nt = nt.slice(nt.indexOf(s[i]) + 1, nt.length) + s[i]
        } else {
            nt = nt + s[i];
        }
    }
    return nt.length > longest ? nt.length : longest
};