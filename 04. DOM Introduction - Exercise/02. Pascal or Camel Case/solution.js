function solve() {
    let input = document.getElementById("text").value;
    let currentCase = document.getElementById("naming-convention").value;
    let result = '';

    switch (currentCase) {
        case 'Camel Case':
            result += toCamelCase(input);
            break;
        case 'Pascal Case':
            result += toPascalCase(input);
            break;
        default:
            result += 'Error!'
            break;
    }

    document.getElementById('result').textContent = result;

    function toCamelCase(text) {
        let result = '';

        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                result += text[i + 1].toUpperCase();
                i++;
            } else {
                result += text[i].toLowerCase();
            }
        }

        return result;
    }

    function toPascalCase(text) {
        let result = text[0].toUpperCase();

        for (let i = 1; i < text.length; i++) {
            if (text[i] === ' ') {
                result += text[i + 1].toUpperCase();
                i++;
            } else {
                result += text[i].toLowerCase();
            }
        }

        return result;

        /*
        return text
            .toLowerCase()
            .split(' ')
            .map(word => word[0]
                .toUpperCase()
                .concat(word.slice(1)))
            .join('');
        */
    }
}