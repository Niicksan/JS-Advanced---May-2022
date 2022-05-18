function circleArea(input) {
    let type = typeof (input);
    let result;

    if (type == 'number') {
        result = (Math.pow(input, 2) * Math.PI).toFixed(2);
    } else {
        result = `We can not calculate the circle area, because we receive a ${type}.`
    }

    console.log(result);
}

circleArea(5);
circleArea('name');
circleArea(true);
circleArea([]);
circleArea({});