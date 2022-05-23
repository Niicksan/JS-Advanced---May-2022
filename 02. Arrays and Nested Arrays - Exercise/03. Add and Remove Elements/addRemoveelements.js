function addRemoveElement(array) {
    let newArray = [];
    let number = 0;

    for (let i = 0; i < array.length; i++) {
        const command = array[i];
        number++;

        if (command === 'add') {
            newArray.push(number);
        } else if (command === 'remove') {
            newArray.pop();
        }
    }

    if (newArray.length > 0) {
        console.log(newArray.join('\n'));
    } else {
        console.log('Empty');
    }
}

addRemoveElement(['add', 'add', 'add', 'add']);
addRemoveElement(['add', 'add', 'remove', 'add', 'add']);
addRemoveElement(['remove', 'remove', 'remove']);