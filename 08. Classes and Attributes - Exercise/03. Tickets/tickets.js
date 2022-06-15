function tickets(array, sortedCriteria) {
    const result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (const ticket of array) {
        const [destination, price, status] = ticket.split('|');

        result.push(new Ticket(destination, price, status));
    }

    // Method 1: With if else check by given criteria
    if (sortedCriteria == 'destination') {
        result.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortedCriteria == 'price') {
        result.sort((a, b) => a.price - b.price);
    } else if (sortedCriteria == 'status') {
        result.sort((a, b) => a.status.localeCompare(b.status));
    }

    return result;

    // Method 2: With a function to sort the array by given criteria
    /* const sortingFunc = {
        destination(tickets) {
            return tickets.sort((a, b) => a.destination.localeCompare(b.destination));
        },
        price(tickets) {
            return tickets.sort((a, b) => a.price - b.price);
        },
        status(tickets) {
            return tickets.sort((a, b) => a.status.localeCompare(b.status));
        },
    };

    return sortingFunc[sortedCriteria](result);*/
}

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'destination'
));

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'status'

));