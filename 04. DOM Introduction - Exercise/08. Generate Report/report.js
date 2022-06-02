function generateReport() {
    let checkBoxes = document.querySelectorAll("thead tr th input");
    let colPosition = [];

    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            colPosition.push(i);
        }
    }

    let finalResult = [];
    let tableData = document.querySelectorAll("tbody tr");

    for (let i = 0; i < tableData.length; i++) {
        let currRow = tableData[i].children;
        let currItems = {};

        for (let j = 0; j < currRow.length; j++) {
            if (colPosition.includes(j)) {
                let label = checkBoxes[j].name;
                let value = currRow[j].textContent;

                currItems[label] = value;
            }
        }

        finalResult.push(currItems);
    }

    if (colPosition.length > 0) {
        let jsonFinal = JSON.stringify(finalResult);
        document.getElementById('output').value = jsonFinal;
    }
}