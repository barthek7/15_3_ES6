const average = (...args) =>{
    let sum = 0;
    args.forEach(arg => sum+= arg);
    return sum / args.length;
};

console.log(average(1,2,3,4,5,6));
console.log(average(2,2,2,2,2));
console.log(average(10,11,23,17.5,9));

module.exports = {
    avg: average
};