function solve() {
    document.querySelector('#selectMenuTo option').textContent = 'Binary';
    document.querySelector('#selectMenuTo option').value = 'binary';
    const selectTo = document.getElementById('selectMenuTo');
    selectTo.innerHTML += '<option selected value="hexadecimal">Hexadecimal</option>';

    document.querySelector('#container button').addEventListener('click', convert);

    function convert() {
        const input = Number(document.getElementById('input').value);
        convertedNumber = '';

        selectTo.value === 'binary'
            ? convertedNumber = input.toString(2)
            : convertedNumber = input.toString(16).toUpperCase();

        document.getElementById('result').value = convertedNumber;
    }
}