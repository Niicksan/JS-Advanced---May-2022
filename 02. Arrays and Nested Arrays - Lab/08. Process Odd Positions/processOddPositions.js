function processOddPositions(array) {
    return array
        .filter((x, i) => i % 2)
        .map(a => a * 2)
        .reverse()
        .join(' ');
}

/*
function processOddPositions(array) {
    const odd = array.filter((x, i) => i % 2);
    const doubled = odd.map(a => a * 2);
    doubled.reverse();

    return doubled.join(' ');
}*/

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));