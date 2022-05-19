function roadRader(speed, area) {
    let speedLimit = 0;
    let status = '';
    let result = '';

    switch (area) {
        case "residential":
            speedLimit = 20;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'motorway':
            speedLimit = 130;
            break;
        default:
            break;
    }

    if (speed < speedLimit && speed > 0) {
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        let diff = Math.abs(speed - speedLimit);

        if (diff <= 20) {
            status = 'speeding';
        } else if (diff > 20 && diff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        result = `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }

    console.log(result);
}

roadRader(40, 'city');
roadRader(21, 'residential');
roadRader(120, 'interstate');
roadRader(200, 'motorway');