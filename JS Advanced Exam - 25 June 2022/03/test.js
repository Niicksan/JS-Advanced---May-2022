const { expect } = require('chai');
const { carService } = require('./03. Car service_Resources');

describe("Car Service", () => {
    describe("isItExpensive", () => {
        it('Happy Path', () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Hood')).to.equal('The overall price will be a bit cheaper');
        });
    });

    describe("discount", () => {
        it('numberOfParts less than 2', () => {
            expect(carService.discount(1, 10)).to.equal('You cannot apply a discount');
        });

        it('numberOfParts is 2', () => {
            expect(carService.discount(2, 10)).to.equal('You cannot apply a discount');
        });

        it('numberOfParts is higher than 2 and less than 7', () => {
            expect(carService.discount(3, 100)).to.equal('Discount applied! You saved 15$');
        });

        it('numberOfParts is 7', () => {
            expect(carService.discount(7, 100)).to.equal('Discount applied! You saved 15$');
        });

        it('numberOfParts is higher than 7', () => {
            expect(carService.discount(8, 100)).to.equal('Discount applied! You saved 30$');
        });

        it('Invalid argument', () => {
            expect(() => carService.discount('1', 2)).throw();
            expect(() => carService.discount(1, '2')).throw();
            expect(() => carService.discount('1', '2')).throw();
            expect(() => carService.discount(['1'], '2')).throw();
            expect(() => carService.discount('1', ['1'])).throw();
        });
    });

    describe("partsToBuy", () => {
        it('One part found - price: $145', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"]))
                .to.equal(145);
        });

        it('Two parts found - price: $375', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"]))
                .to.equal(375);
        });

        it('partsCatalog array is empty - price: $0', () => {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"]))
                .to.equal(0);
        });

        it('neededParts array is empty - price: $0', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], []))
                .to.equal(0);
        });

        it('Invalid argument', () => {
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 2)).throw();
            expect(() => carService.partsToBuy(1, ["blowoff valve", "injectors"])).throw();
            expect(() => carService.partsToBuy({ part: "blowoff valve", price: 145 }, '2')).throw();
        });
    });
});