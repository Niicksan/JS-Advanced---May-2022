function printElementsFromArray(array, step) {
    return array.filter((element, index) => index % step == 0)
}

printElementsFromArray(['5', '20', '31', '4', '20'], 2);
//printElementsFromArray(['dsa', 'asd', 'test', 'tset'], 2);
//printElementsFromArray(['1', '2', '3', '4', '5'], 6);