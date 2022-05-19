function sameNumbers(number) {
    let numberToString = number.toString();
    let sum = Number(numberToString[0]);
    let isSameNumber = true;

    for (let i = 1; i < numberToString.length; i++) {
        let previusNumber = Number(numberToString[i - 1])
        let currentNumner = Number(numberToString[i])

        sum += currentNumner;

        if (isSameNumber && (previusNumber !== currentNumner)) {
            isSameNumber = false;
        }
    }

    console.log(isSameNumber);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);