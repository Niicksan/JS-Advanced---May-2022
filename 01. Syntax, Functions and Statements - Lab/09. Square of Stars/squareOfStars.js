function printStars(count = 5) {
    for (let i = 0; i < count; i++) {
        console.log("* ".repeat(count));
    }
}

/*
function printStars(count = 5) {
    for (let i = 0; i < count; i++) {
        let str = '';

        for (let j = 0; j < count; j++) {
            str += "* ";
        }
        
        console.log(str);
    }
}*/

printStars();
printStars(1);
printStars(2);
printStars(5);
printStars(6);
printStars(7);