function sortedList() {
    const list = {
        elements: [],
        size: 0,
        add(element) {
            this.elements.push(element);
            this.elements.sort((a, b) => a - b);
            this.size = this.elements.length;
        },
        get(index) {
            if (this.elements[index] !== undefined) {
                return this.elements[index];
            }
        },
        remove(index) {
            if (this.elements[index] !== undefined) {
                this.elements.splice(index, 1);
                this.size = this.elements.length;
            }
        }
    };

    return list;
}

let list = sortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));