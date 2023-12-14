function mergeArrays(arr1, arr2) {              
    const mergedArray = [...arr1, ...arr2];
    return mergedArray;
}


let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

console.log(mergeArrays(array1, array2));