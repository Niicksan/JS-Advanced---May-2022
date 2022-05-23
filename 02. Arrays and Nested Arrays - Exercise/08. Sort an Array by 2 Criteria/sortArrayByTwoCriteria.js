function sortArrayByTwoCriteria(array) {
    array.sort((a, b) => a.length === b.length ? a.localeCompare(b) : a.length - b.length);
    console.log(array.join("\n"));
}

/*
function sortArrayByTwoCriteria(array) {
    array.sort(twoCriteriaSorting);

    return array.join('\n');

    function twoCriteriaSorting(current, next) {
        //sorting
        if (current.length === next.length) {
            return current.localeCompare(next);
        }

        return current.length - next.length;
    }
}*/

console.log(sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']));
console.log(sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sortArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']));