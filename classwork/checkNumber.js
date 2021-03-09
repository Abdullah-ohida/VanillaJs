function checkNumber(a, b){
    return a === 50 || b === 50 || a + b === 50;
}

console.log(checkNumber(30, 20))
console.log(checkNumber(50, 20))
console.log(checkNumber(30, 50))
console.log(checkNumber(10, 20))