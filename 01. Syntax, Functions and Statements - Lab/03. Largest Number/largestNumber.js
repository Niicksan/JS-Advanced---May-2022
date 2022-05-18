function largestNumber(num1, num2, num3) {
    const arrayNums = new Array(num1, num2, num3);
    let result = Math.max(...arrayNums)

    console.log(`The largest number is ${result}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);