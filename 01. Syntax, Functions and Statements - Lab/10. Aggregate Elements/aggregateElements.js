function aggregate(arr) {
    let sum = 0;
    let inverseSum = 0;
    let concat = '';

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        inverseSum += 1 / arr[i];
        concat += arr[i];
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);