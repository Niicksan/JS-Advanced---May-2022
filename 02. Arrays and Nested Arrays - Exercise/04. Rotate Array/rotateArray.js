function rotateArray(array, rotation) {
    for (let i = 0; i < rotation; i++) {
        //let lastElement = array.pop();
        array.unshift(array.pop());
    }

    return array.join(' ');
}

console.log(rotateArray(['1', '2', '3', '4'], 2));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));