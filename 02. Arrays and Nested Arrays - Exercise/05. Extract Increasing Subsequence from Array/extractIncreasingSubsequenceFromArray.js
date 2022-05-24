function extractIncreasingSequence(array) {
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

/*
function extractIncreasingSequence(array) {
    return array.reduce((arr, element) => {
        if (array >= (arr[arr.length - 1] || array[0])) {
            arr.push(element)
        }
        return arr
    }, [])
}*/

console.log(extractIncreasingSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSequence([1, 2, 3, 4]));
console.log(extractIncreasingSequence([20, 3, 2, 15, 6, 1]));