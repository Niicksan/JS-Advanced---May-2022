function orbit(array) {
    let [matrixRows, matrixCols, startingRow, startingCol] = array;
    let matrix = new Array(matrixRows).fill(0).map(() => new Array(matrixCols).fill(0));

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = Math.max(Math.abs(row - startingRow), Math.abs(col - startingCol)) + 1
        }
    }

    matrix.forEach(line => console.log(line.join(' ')))
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);