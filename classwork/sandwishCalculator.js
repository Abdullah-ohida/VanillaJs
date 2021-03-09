function calculator(slicesOfBread){
    return Math.trunc(slicesOfBread / 2);
}

// console.log(calculator(7))

function prepareSanwish(slicesOfBread, slicesOfCheese){
    if(slicesOfCheese >= slicesOfBread){
        return calculator(slicesOfBread);
    }else{
        return slicesOfCheese;
    }
}

console.log(prepareSanwish(2, 4))
console.log(prepareSanwish(4, 4))
console.log(prepareSanwish(10, 4))