function fromJSONToHTMLTable(jsonString) {
    const students = JSON.parse(jsonString);
    let htmlText = ['<table>'];
    let objNames = students[0];

    htmlText.push(makeKeyRow(objNames));
    students.forEach(obj => htmlText.push(makeValueRow(obj)));
    htmlText.push('</table>');

    function makeKeyRow(arr) {
        let keys = [];

        Object.keys(arr).forEach(key => {
            keys.push(`<th>${escapeHTML(key)}</th>`);
        });

        return ("   <tr>" + keys.join('') + "</tr>");
    }

    function makeValueRow(obj) {
        let rows = [];

        Object.values(obj).forEach(value => {
            rows.push(`<td>${escapeHTML(value)}</td>`);
        });

        return ("   <tr>" + rows.join('') + "</tr>");
    }

    function escapeHTML(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    return htmlText.join('\r\n');
    //console.log(htmlText.join('\r\n'));
}

window.onload = function () {
    let container = document.getElementById('wrapper');
    container.innerHTML = fromJSONToHTMLTable(['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]']);
};

//fromJSONToHTMLTable(['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]']);