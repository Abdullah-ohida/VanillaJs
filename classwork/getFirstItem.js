function getFirstValue(...agrs){
    for(let count = 0; count < agrs.length; count++){
        return agrs[count];
    }
}

console.log(getFirstValue([4, 5,6], "Hello", 64))
