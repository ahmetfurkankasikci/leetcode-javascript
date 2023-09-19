var romanToInt = function (s) {
    var map = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);
    let sub = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) >= map.get(s[i + 1]) || i + 1 == s.length) {
            sub = sub + map.get(s[i])
        } else {
            sub = sub + map.get(s[i + 1]) - map.get(s[i])
            i = i + 1
        }
    }
    return sub
};