const invert = require('../invert');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const output = invert(testObject);
console.log(output);
