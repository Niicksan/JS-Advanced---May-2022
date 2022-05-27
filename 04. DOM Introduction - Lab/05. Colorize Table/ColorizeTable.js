function colorize() {
    //Array.from(document.querySelectorAll('table tr:nth-child(even)')).forEach(e => e.style.background = 'Teal');
    const rows = document.querySelectorAll('tr:nth-child(2n)');

    for (let i = 0; i < rows.length; i++) {
        rows[i].style.background = 'Teal'
    }
}