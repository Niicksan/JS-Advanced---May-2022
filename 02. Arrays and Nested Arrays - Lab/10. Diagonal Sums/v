function diagonalSums(matrix) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                primaryDiagonal += Number(matrix[row][col]);
            }

            if (row + col === matrix[row].length - 1) {
                secondaryDiagonal += Number(matrix[row][col]);
            }
        }
    }

    console.log(primaryDiagonal, secondaryDiagonal)
}

diagonalSums([
    [20, 40],
    [10, 60]
]);

diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);

diagonalSums([
    [3, 5, 17, 12],
    [-1, 7, 14, 67],
    [1, -8, 89, 32],
    [4, -2, 93, 32]
]);