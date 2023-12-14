function getEvenSquares(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num;
        }
        return num;
    });
}

let numbers = [1, 2, 3, 4, 5];
console.log(getEvenSquares(numbers));