function biggerHalf(array) {
    array.sort((a, b) => a - b);

    const biggerHalf = [];

    for (let i = Math.floor(array.length / 2); i < array.length; i++) {
        biggerHalf.push(array[i]);
    }

    return biggerHalf;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));