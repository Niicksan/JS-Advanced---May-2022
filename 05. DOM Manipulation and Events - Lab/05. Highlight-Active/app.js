function focused() {
    Array.from(document.querySelectorAll('input'))
        .forEach(e => {
            e.addEventListener('focus', onFocus);
            e.addEventListener('blur', onBlur);
        });

    function onFocus(ev) {
        ev.target.parentElement.classList.add('focused');
    }

    function onBlur(ev) {
        ev.target.parentElement.classList.remove('focused');
    }
}