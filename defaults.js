function defaults(obj, defaultProps) {
    for (const i in defaultProps) {
        if (defaultProps.hasOwnProperty(i) && !obj.hasOwnProperty(i)) {
            obj[i] = defaultProps[i];
        }
    }
    return obj;
}

module.exports = defaults;
