function mapObject(obj, cb) {
    const output = {};
    for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
            output[i] = cb(obj[i]);
        }
    }
    return output;
}

module.exports = mapObject;
