function stringLength(str1, str2, str3) {
    let length = str1.length + str2.length + str3.length;

    console.log(length);
    console.log(Math.floor(length / arguments.length));
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');