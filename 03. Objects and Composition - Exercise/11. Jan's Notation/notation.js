function notation(array) {
    const operands = [];
    let notEnoughOperands = false;

    for (const element of array) {
        if ('+-*/'.includes(element)) {
            if (operands.length < 2) {
                notEnoughOperands = true;
                break;
            }

            //const [number1, number2] = operands.splice(-2, 2);
            number2 = operands.pop();
            number1 = operands.pop();

            if (number2 === 0 && element === '/') {
                break;
            }

            operands.push(calculate(number1, number2, element));
        } else {
            operands.push(element);
        }
    }

    if (notEnoughOperands) {
        console.log('Error: not enough operands!');
    } else {
        console.log(operands.length === 1 ? operands[0] : 'Error: too many operands!');
    }

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
notation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);
notation([3, 4, '+']);
notation([5, 3, 4, '*', '-']);
notation([7, 33, 8, '-']);
notation([15, '/']);