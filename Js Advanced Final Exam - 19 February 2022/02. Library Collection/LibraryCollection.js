class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        })

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let bookIndex = this.books.findIndex(b => b.bookName == bookName);

        if (bookIndex == -1) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (this.books[bookIndex].payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        this.books[bookIndex].payed = true;

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let bookIndex = this.books.findIndex(b => b.bookName == bookName);

        if (bookIndex == -1) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (!this.books[bookIndex].payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(bookIndex, 1);

        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        let result = [];

        if (typeof bookAuthor === "undefined") {
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);

            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            const books = this.books.map(b => `${b.bookName} == ${b.bookAuthor} - ${b.payed ? "Has Paid" : "Not Paid"}.`);

            result.push(books.join('\n'));
        } else {
            if (!this.books.find(b => b.bookAuthor == bookAuthor)) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            this.books.map(b => b.bookAuthor == bookAuthor);

            const booksByAuthor = this.books.map(b => `${b.bookName} == ${b.bookAuthor} - ${b.payed ? "Has Paid" : "Not Paid"}.`);

            result.push(booksByAuthor.join('\n'));
        }

        return result.join('\n');
    }
}

const library = new LibraryCollection(5)

library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());