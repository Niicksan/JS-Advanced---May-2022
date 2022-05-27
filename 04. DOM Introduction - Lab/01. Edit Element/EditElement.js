function editElement(element, match, replacer) {
    const text = element.textContent;

    // With Regex
    //const pattern = new RegExp(match, 'g')
    //const result = text.replace(pattern, replacer);
    const result = text.split(match).join(replacer);
    element.textContent = result;
}