function isEven(number){
    return number % 2 === 0;
}

function isOdd(number){
    return number % 2 === 1;
}

function factors(number){
    let factors  = [];
    count = number;
    while(count != 0){
        if(number % count === 0)
            factors.push(count);
        count--;
    }

    return factors.join(", ");
}


function sum(...args){
    let total = 0;
    args.forEach(element => {
        total += element;
    });
    return total;
}

function product(...args){
    let total = 1;
    args.forEach(element => {
        total *= element;
    });
    return total;
}

function isPrime(number){
    if(number === 1)
        return false;
    for(let count = 2; count < number; count++){
        if(number % count == 0)
            return false
    }
    return true;
}

// isEven
console.log(isEven(8))
console.log(isEven(9))

// IsOdd
console.log(isEven(7))
console.log(isEven(12))

// Factors
console.log(factors(7))
console.log(factors(12))
console.log(factors(8))
console.log(factors(9))

// Product
console.log(product(2, 4, 5, 6, 7,8))

// Sum
console.log(sum(2, 4, 5, 6, 7,8))

// Isprime 
console.log(isPrime(7))
console.log(isPrime(12))
console.log(isPrime(9))
console.log(isPrime(2))
