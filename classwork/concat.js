function concatArray(array, jointChar){
    let concat = array.join(jointChar);
    return  concat;
}

console.log(concatArray([2, 4, 5], '*'))