function reverseString(string) {
    let res = ""; 
    for (let i = string.length - 1; i >= 0; i--) {
        res = res + string.charAt(i)
    }
    return res;
}

module.exports = reverseString;