function mathOperations(num1, num2, operand) {
    let result;

    switch (operand) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break
        case '**':
            result = num1 ** num2;
            break
        default:
            break;
    }

    console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
mathOperations(15, 6, '-');
mathOperations(10, 3, '%');
mathOperations(2, 8, '*');