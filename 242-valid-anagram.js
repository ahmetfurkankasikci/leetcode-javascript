var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const sArray = s.split("");
    const tArray = t.split("");
    return sArray.sort().toString() == tArray.sort().toString();
};