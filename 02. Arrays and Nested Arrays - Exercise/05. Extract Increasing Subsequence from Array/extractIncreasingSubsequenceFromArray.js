function extractIncreasingSubsequenceFromArray(array) {
    const result = [];
    let biggestNumber = array[0];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];

        if (currentNumber >= biggestNumber) {
            result.push(currentNumber);
            biggestNumber = currentNumber;
        }
    }

    return result;
}

console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]));