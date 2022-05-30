function solve() {
    let inputElement = document.getElementById('input');
    let textArr = inputElement.value.split('.').filter(s => s !== '');
    let resultDiv = document.getElementById('output');

    console.log(textArr);
    console.log(textArr.lenght);

    while (textArr.length > 0) {
        let text = textArr.splice(0, 3).join('. ') + '.';

        console.log(text);
        let p = document.createElement('p');
        p.textContent = text;
        console.log(p);
        resultDiv.appendChild(p);
    }
}