function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
    return function (value) {
        return currencyFormatter(separator, symbol, symbolFirst, value);
    }
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);

    (true) ? result = `${symbol} ${result}` : result = `${symbol} ${symbol}`;

    return result;
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);

console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); // $ 2,71