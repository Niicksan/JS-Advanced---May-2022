function solve() {
    document.querySelector('tfoot tr td button').addEventListener('click', quickCheck);
    document.querySelectorAll('tfoot tr td button')[1].addEventListener('click', clear);

    const tbody = document.querySelector('tbody');
    const size = tbody.children.length;
    const numbers = Array.from(document.querySelectorAll('input'));
    const table = document.querySelector('table');
    const result = document.getElementById('check').children[0];
    console.dir(result);

    function quickCheck() {
        let hasError = false;
        let isHasRowDuplicate = false;
        let isHasCollDuplicate = false;

        //Check rows
        for (let rowIndex = 0; rowIndex < size; rowIndex++) {
            const rowsValues = [];

            for (let colIndex = 0; colIndex < size; colIndex++) {
                const cellValue = tbody.children[rowIndex].children[colIndex].firstElementChild.value;

                if (cellValue < 1 || cellValue > size || cellValue == '' || Number(cellValue) == NaN) {
                    hasError = true;
                    break;
                }

                rowsValues.push(cellValue);
            }

            if (checkIfDuplicateExists(rowsValues)) {
                isHasRowDuplicate = true;
                break
            }
        }


        //Check columns
        for (let colIndex = 0; colIndex < size; colIndex++) {
            const colsValues = [];

            for (let rowIndex = 0; rowIndex < size; rowIndex++) {
                const cellValue = tbody.children[rowIndex].children[colIndex].firstElementChild.value;

                if (cellValue < 1 || cellValue > size || cellValue == '' || Number(cellValue) == NaN) {
                    hasError = true;
                    break;
                }

                colsValues.push(cellValue);
            }

            if (checkIfDuplicateExists(colsValues)) {
                isHasRowDuplicate = true;
                break;
            }
        }

        (!isHasRowDuplicate && !isHasCollDuplicate && !hasError) ? setStyle('2px solid', 'green', 'You solve it! Congratulations!') : setStyle('2px solid', 'red', 'NOP! You are not done yet...');
    }

    function clear() {
        for (let i = 0; i < numbers.length; i++) {
            numbers[i].value = '';
        }

        table.style.border = 'none';
        result.style.color = '';
        result.textContent = '';
    }

    function setStyle(tableStyle, color, resultContent) {
        table.style.border = tableStyle;
        table.style.borderColor = color;
        result.textContent = resultContent;
        result.style.color = color;
    }

    function checkIfDuplicateExists(arr) {
        return new Set(arr).size !== arr.length
    }
}