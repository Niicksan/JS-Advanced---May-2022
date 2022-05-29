function notation(array) {
    const numbers = [];
    const operands = [];

    for (const element of array) {
        if (Number(element)) {
            numbers.push(element);
        } else {
            operands.push(element);
        }
    }

    if (numbers.length - operands.length > 1) {
        return console.log('Error: too many operands!');
    } else if (numbers.length <= 1) {
        return console.log('Error: not enough operands!');
    }

    while (operands.length > 0) {
        let firstNum = numbers.pop();
        let secondNum = numbers.pop();
        let operand = operands.shift();

        numbers.push(calculate(secondNum, firstNum, operand));
    }

    console.log(numbers.join(''));

    function calculate(num1, num2, opeerand) {
        switch (opeerand) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                break;
        }
    }
}

notation([31, 2, '+', 11, '/']);
/*
notation([3, 4, '+']);
notation([5, 3, 4, '*', '-']);
notation([7, 33, 8, '-']);
notation([15, '/']);
*/