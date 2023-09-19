var reverseWords = function (s) {
    return s.split(" ").reverse().filter((item) => item !== "").join(" ");
};