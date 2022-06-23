const { expect } = require('chai');
const { companyAdministration } = require('./companyAdministration');

describe("Company Administration", () => {
    describe("hiringEmployee ", () => {
        it('Happy Path', () => {
            expect(companyAdministration.hiringEmployee("Nik", "Programmer", 5)).to.equal('Nik was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee("Nik", "Programmer", 3)).to.equal('Nik was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee("Nik", "Programmer", 2)).to.equal('Nik is not approved for this position.');
        });

        it('Not a Programmer', () => {
            expect(() => companyAdministration.hiringEmployee("Nik", "BMW", 5)).throw();
        });
    });

    describe("calculateSalary ", () => {
        it('Happy Path', () => {
            expect(companyAdministration.calculateSalary(100)).to.equal(1500);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        });

        it('Invalid Input', () => {
            expect(() => companyAdministration.calculateSalary('1')).throw();
            expect(() => companyAdministration.calculateSalary(-1)).throw();
        });
    });

    describe("firedEmployee ", () => {
        it('Happy Path', () => {
            expect(companyAdministration.firedEmployee(["Peter", "Ivan", "George"], 0)).to.equal('Ivan, George');
            expect(companyAdministration.firedEmployee(["Peter", "Ivan", "George"], 1)).to.equal('Peter, George');
            expect(companyAdministration.firedEmployee(["Peter", "Ivan", "George"], 2)).to.equal('Peter, Ivan');
        });

        it('Invalid Input', () => {
            expect(() => companyAdministration.firedEmployee('1', 1)).throw();
            expect(() => companyAdministration.firedEmployee(["Peter", "Ivan", "George"], '1')).throw();
            expect(() => companyAdministration.firedEmployee(["Peter", "Ivan", "George"], -1)).throw();
            expect(() => companyAdministration.firedEmployee(["Peter", "Ivan", "George"], 5)).throw();
        });
    });
});