function lastKnumbers(n, k) {
    let sum = [1];

    for (let i = 1; i < n; i++) {
        let start = i - k >= 0 ? i - k : 0;
        let previousNumber = sum.slice(start, i);
        let currenNumber = previousNumber.reduce((a, b) => a + b, 0);

        sum.push(currenNumber);
    }

    return sum;
}

console.log(lastKnumbers(6, 3));
console.log(lastKnumbers(8, 2));