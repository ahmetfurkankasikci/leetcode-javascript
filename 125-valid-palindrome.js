var isPalindrome = function (s) {
    return s.replace(/[.,"@['\]/#!$%?\^&\*;:{}=\-_`~()\s]/g, "")
        .toLowerCase() === s.replace(/[.,"@['\]/#!$%?\^&\*;:{}=\-_`~()\s]/g, "")
            .split("").reverse().join("").toLowerCase();
}