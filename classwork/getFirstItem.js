function getFirstValue(...agrs){
    for(let count = 0; count < agrs.length; count++){
        return agrs[count];
    }
}

console.log(getFirstValue([4, 5,6], "Hello", 64))

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Who are you?", name =>{
    console.log(`Hey there ${name}!`);
    readLine.close()
})