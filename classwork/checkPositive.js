function checkIntegers(a, b){
    let message1,message2  = "";
    message1 = a > 0 ? "Positve" : "Negative";
    message2 = b > 0 ? "Postive" : "Negative";

    return (`${a} is ${message1}, ${b} is ${message2}`)
}

console.log(checkIntegers(-2, 4))
console.log(checkIntegers(-2, -4))
console.log(checkIntegers(2, -4))