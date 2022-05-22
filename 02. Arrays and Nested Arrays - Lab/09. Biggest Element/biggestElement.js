function biggestElement(matrix) {
    let biggestNumber = matrix[0][0];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > biggestNumber) {
                biggestNumber = matrix[row][col];
            }
        }
    }
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]
])

biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
])