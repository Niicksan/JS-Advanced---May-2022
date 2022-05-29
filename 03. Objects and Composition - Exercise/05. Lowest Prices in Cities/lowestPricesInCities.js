function lowestPricesInCities(input) {
    const products = {};

    for (const element of input) {
        let [town, name, price] = element.split(' | ');
        price = Number(price);

        if (!(products.hasOwnProperty(name)) || products[name].price > price) {
            products[name] = {
                price: price,
                town: town
            };
        }
    }

    for (const [name, items] of Object.entries(products)) {
        console.log(`${name} -> ${items.price} (${items.town})`);
    }
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);
