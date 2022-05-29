function storeCatalogue(input) {
    const result = input.sort((a, b) => a.localeCompare(b));
    let firstChar = '';

    for (const element of result) {
        let [name, price] = element.split(' : ');
        price = Number(price);

        if (element[0] !== firstChar) {
            console.log(element[0]);
        }

        console.log(`  ${name}: ${price}`);

        firstChar = element[0];
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

storeCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);