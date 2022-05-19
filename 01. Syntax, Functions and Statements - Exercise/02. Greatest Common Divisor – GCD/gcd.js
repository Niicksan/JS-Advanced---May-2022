function gcd(num1, num2) {
    for (let i = Math.min(num1, num2); i >= 1; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            console.log(i)
            break
        }
    }
}

/*
function gcd(num1, num2) {
    if (num2) {
        return gcd(num2, num1 % num2);
    } else {
        console.log(num1);
    }
}*/

/*
function gcd(num1, ) {
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) {
        return false;
    }

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    while (num2) {
        let current = num2;
        num2 = num1 % num2;
        num1 = current;
    }

    console.log(num1);
}*/

gcd(15, 5);
gcd(2154, 458);