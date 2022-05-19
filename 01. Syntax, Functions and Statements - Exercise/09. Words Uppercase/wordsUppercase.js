function wordsUppercase(text) {
    let words = text
        .toUpperCase()
        .split(/\W+/)
        .filter(w => w !== '');

    console.log(words.join(', '));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');