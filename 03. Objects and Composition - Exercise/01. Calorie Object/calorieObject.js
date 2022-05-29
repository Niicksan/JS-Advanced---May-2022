function calarieObject(foodsArray) {
    const foods = {};

    for (let i = 0; i < foodsArray.length; i += 2) {
        const name = foodsArray[i];
        const calories = Number(foodsArray[i + 1]);

        foods[name] = calories;
    }

    console.log(foods);
}

calarieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calarieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);