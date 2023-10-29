const defaults = require('../defaults');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const defaultProps = { age: 40, alias: 'Batman' };
const output = defaults(testObject, defaultProps);
console.log(output);
