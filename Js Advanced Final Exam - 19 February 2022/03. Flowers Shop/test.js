const { expect } = require('chai');
const { flowerShop } = require('./flowerShop');

describe("Flower Shop", () => {
    describe("calcPriceOfFlowers", () => {
        it('Happy Path', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 2, 2)).to.equal('You need $4.00 to buy Rose!');
        });

        it('Invalid argument', () => {
            expect(() => flowerShop.calcPriceOfFlowers(['Rose', 'Lily'], 5, 1)).throw();
            expect(() => flowerShop.calcPriceOfFlowers('Rose', '5', 2)).throw();
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 5, '2')).throw();
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 5.1, 2)).throw();
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 5, 2.1)).throw();
        });
    });

    describe("checkFlowersAvailable", () => {
        it('Happy Path', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal('The Rose are available!');
        });

        it('Unavailable flower', () => {
            expect(flowerShop.checkFlowersAvailable('Sunflower', ["Rose", "Lily", "Orchid"])).to.equal('The Sunflower are sold! You need to purchase more!');
        });
    });

    describe("sellFlowers", () => {
        it('Happy Path', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal('Lily / Orchid');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal('Rose / Orchid');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily');
        });

        it('Invalid argument', () => {
            expect(() => flowerShop.sellFlowers('Rose', 1)).throw();
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '1')).throw();
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).throw();
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 4)).throw();
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1.1)).throw();
        });
    });
});