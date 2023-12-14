function getUniqueElements(arr) {

    return [...new Set(arr)];
}

console.log(getUniqueElements([1, 2, 3, 1, 2, 3])); 
console.log(getUniqueElements([4, 5, 6, 4, 5, 6])); 