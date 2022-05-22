function sumFisrtLast(array) {
    const first = [...array].shift();
    const last = [...array].pop();

    return Number(first) + Number(last);
}

/*
function sumFisrtLast(array) {
    return Number(array.shift()) + Number(array.pop());
}*/

/*
function sumFisrtLast(array) {
    return Number(array[0]) + Number(array[array.length - 1]);
}*/

console.log(sumFisrtLast(['20', '30', '40']));
console.log(sumFisrtLast(['5', '10']));
console.log(sumFisrtLast(['5']));