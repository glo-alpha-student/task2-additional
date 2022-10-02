let num = 266219;
let array = num.toString();
const beta = array.split('');

const alpha = beta.reduce((a, b) => a * b);
console.log(alpha);

