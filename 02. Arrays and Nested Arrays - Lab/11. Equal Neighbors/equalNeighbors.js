function equalNeighbors(matrix) {
    //counter
    let counter = 0;

    //Check rows
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let colIndex = 0; colIndex < matrix[rowIndex].length - 1; colIndex++) {
            if (matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex + 1]) {
                counter++;
            }
        }
    }

    //Check columns
    const rowLenght = matrix[0].length;
    for (let colIndex = 0; colIndex < rowLenght; colIndex++) {
        for (let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++) {
            if (matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]) {
                counter++;
            }
        }
    }

    //print result
    console.log(counter);
}

/* 33/100
function equalNeighbors(matrix) {
    //counter
    let counter = 0;

    for (let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++) {
        for (let colIdex = 0; colIdex < matrix[rowIndex].length - 1; colIdex++) {
            if (matrix[rowIndex][colIdex] === matrix[rowIndex][colIdex + 1]) {
                counter++;
            }

            if (matrix[rowIndex][colIdex] === matrix[rowIndex + 1][colIdex]) {
                counter++;
            }
        }
    }

    //print result
    console.log(counter);
}*/

equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);