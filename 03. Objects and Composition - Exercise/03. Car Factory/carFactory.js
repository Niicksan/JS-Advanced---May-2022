function carFactory(obj) {
    const car = {
        model: obj.model,
        engine: checkEngine(),
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: new Array(4).fill((obj.wheelsize % 2) ? obj.wheelsize : obj.wheelsize - 1)
    };

    //console.log(car);
    return car;

    function checkEngine() {
        const engine = {};

        if (obj.power <= 90) {
            engine.power = 90;
            engine.volume = 1800;
        } else if (obj.power <= 120) {
            engine.power = 120;
            engine.volume = 2400;
        } else if (obj.power <= 200) {
            engine.power = 200;
            engine.volume = 3500;
        }

        return engine;
    }
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));