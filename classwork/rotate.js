function reverseArray(array){
    newArr = [];
    array.forEach(element => {
        newArr.unshift(element);
    });
    return newArr;
}

console.log(reverseArray([2, 4, 5]));
console.log(reverseArray(["Hello", "Hey", 9, 7, "uuu"]));
