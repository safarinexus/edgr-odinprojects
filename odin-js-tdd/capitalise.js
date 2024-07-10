function capitalise(string) {
    let i = 0;
    while (!((/[a-zA-Z]/).test(string[i])) && i !== string.length - 1) {
        i++;
    }

    if (i > 0) {
        if (i < string.length) {
            return string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1, string.length);
        }
    } else {
        return string[0].toUpperCase() + string.substring(1, string.length);
    }
}

module.exports = capitalise;