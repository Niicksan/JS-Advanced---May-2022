function objectFactory(lib, orders) {
    // for every order in orders
    return orders.map(order => {
        // createing an object and coping template props
        const object = Object.assign({}, order.template)

        // compose function from library to object
        for (let part of order.parts) {
            object[part] = lib[part]
        }

        // return object
        return object;
    });

    // return orders.map(order => Object.assign({}, order.template, Object.fromEntries(order.parts.map(part => [part, lib[part]]))));
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

const products = objectFactory(library, orders);

console.log(products);

products[3].play('Rick Atley', 'Never Gonna Give You Up');