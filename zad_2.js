//Using arrow function with a default value for b
const multiply = (a, b=1) =>{return a * b};

console.log(multiply(5,2));
console.log(multiply(5));
console.log(multiply(-1,10));
console.log(multiply(11,11));