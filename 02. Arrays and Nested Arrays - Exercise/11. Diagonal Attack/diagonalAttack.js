function diagonalAttack(matrix) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    matrix.forEach((row, index) => matrix[index] = row.split(' ').map(Number));

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                primaryDiagonalSum += Number(matrix[row][col]);
            }

            if (row + col === matrix[row].length - 1) {
                secondaryDiagonalSum += Number(matrix[row][col]);
            }
        }
    }

    if (primaryDiagonalSum === secondaryDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row === col || row + col === matrix.length - 1) {
                    continue;
                }

                matrix[row][col] = primaryDiagonalSum;
            }
        }
    }

    matrix.forEach(line => console.log(line.join(' ')));
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);