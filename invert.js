function invert(obj) {
    const output = {};
    for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
            output[obj[i]] = i;
        }
    }
    return output;
}

module.exports = invert;
