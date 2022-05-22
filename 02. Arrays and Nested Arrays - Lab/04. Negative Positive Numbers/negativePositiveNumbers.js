function negativePositiveNumbers(array) {
    const manipulatedArray = [];

    for (const element of array) {
        if (element < 0) {
            manipulatedArray.unshift(element)
        } else if (element >= 0) {
            manipulatedArray.push(element)
        }
    }

    return manipulatedArray;
}

console.log(negativePositiveNumbers([7, -2, 8, 9]));
console.log(negativePositiveNumbers([3, -2, 0, -1]));