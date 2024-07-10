function caesarCipher(string, factor) {

    function keepUpper() {
        uppers = [];
        for (let i = 0; i < string.length; i++) {
            if (string[i] === string[i].toUpperCase()) {
                uppers.push(i);
            }
        }
        return uppers;
    }

    const isAlpha = function(ch){
        return /^[A-Z]$/i.test(ch);
      }

    const map = new Map();
    const letters = "abcdefghijklmnopqrstuvwxyz"; 
    for (let i = 0; i < letters.length; i++) {
        map.set(letters[i] , i);
    }

    let uppercases = keepUpper(); 
    lowercase = string.toLowerCase(); 

    let res = "";
    for (let j = 0; j < lowercase.length; j++) {
        if (isAlpha(lowercase[j])) {
            
            let index = map.get(lowercase[j]) + factor;

            if (index > 25) {
                index %= 26;
            }

            let newLetter = letters[index];

            if (uppercases.includes(j)) {
                res = res + newLetter.toUpperCase(); 
            } else {
                res = res + newLetter; 
            }
        } else {
            res += lowercase[j];
        }
    }
    
    return res;

}

module.exports = caesarCipher;