let num = 266219;
let convert = num.toString();
const array = convert.split('');

const multiple = array.reduce((a, b) => a * b);

const bigValue = multiple ** 3;

let cutValue = bigValue.toString();

console.log(cutValue.substring(0, 2));

