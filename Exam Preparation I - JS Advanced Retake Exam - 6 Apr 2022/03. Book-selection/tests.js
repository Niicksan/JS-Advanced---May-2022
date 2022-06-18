const { expect } = require('chai');
const { bookSelection } = require('./solution');

describe("Book Selection", () => {
    describe("isGenreSuitable", () => {
        it('Happy Path', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('asd', 10)).to.equal('Those books are suitable');
        });

        it('inappropriate genre for the age', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal('Books with Thriller genre are not suitable for kids at 10 age');
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal('Books with Horror genre are not suitable for kids at 10 age');
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        });
    });

    describe("isItAffordable", () => {
        it('Happy path', () => {
            expect(bookSelection.isItAffordable(10, 12)).to.equal('Book bought. You have 2$ left');
            expect(bookSelection.isItAffordable(10, 10)).to.equal('Book bought. You have 0$ left');
        });

        it('Not enough money', () => {
            expect(bookSelection.isItAffordable(12, 10)).to.equal('You don\'t have enough money');
        });

        it('Invalid input', () => {
            expect(() => bookSelection.isItAffordable('12', 10)).throw();
            expect(() => bookSelection.isItAffordable(12, '10')).throw();
            expect(() => bookSelection.isItAffordable('12', '10')).throw();
        });
    });

    describe("suitableTitles", () => {
        it('Happy path', () => {
            expect(bookSelection.suitableTitles([{
                title: 'Wrong turn',
                genre: 'Horror'
            }], 'Horror')).to.deep.equal(['Wrong turn']);
        });

        it('happy path, two matches', () => {
            expect(bookSelection.suitableTitles([{
                title: 'Two pieces',
                genre: 'Horror'
            },
            {
                title: 'Wrong turn',
                genre: 'Horror'
            },
            {
                title: 'No way home',
                genre: 'Romance'
            }], 'Horror')).to.deep.equal(['Two pieces', 'Wrong turn']);
        });

        it('no match', () => {
            expect(bookSelection.suitableTitles([{
                title: 'Two pieces',
                genre: 'Thriller'
            }], 'Horror')).to.deep.equal([]);
        });

        it('Invalid input', () => {
            expect(() => bookSelection.suitableTitles(10, 'Romance')).throw();
            expect(() => bookSelection.suitableTitles([{
                title: 'Thriller',
                genre: 'Horror'
            }], 5)).to.throw();
            expect(() => bookSelection.suitableTitles(10, 10)).throw();
        });
    });
});