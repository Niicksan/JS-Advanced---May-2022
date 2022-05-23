function magicMatrix(matrix) {
    let isMagical = true;

    for (let row = 0; row < matrix.length - 1; row++) {
        let currentRow = matrix[row].reduce((a, b) => a + b, 0);
        let nextRow = matrix[row + 1].reduce((a, b) => a + b, 0);

        let currentCol = 0;
        let nextCol = 0;
        for (let col = 0; col < matrix.length; col++) {
            currentCol += matrix[row][col];
            nextCol += matrix[row + 1][col];
        }

        if (currentRow !== nextRow || currentCol !== nextCol) {
            isMagical = false
        }
    }

    console.log(isMagical);
}

magicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);

magicMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);

magicMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);