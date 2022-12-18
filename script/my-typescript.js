function paralelogrammaTerulet(a, b, c) {
    console.log("paralelogrammaTerulet");
    return a * b * Math.sin(c / 180 * Math.PI);
}
function paralelogrammaTerulet1(a, ma) {
    console.log("paralelogrammaTerulet1");
    return a * ma;
}
function randomStringsToString(input) {
    var res = randomStrings(input.split(";"));
    return res[0] + "\n" + res[1] + "\n" + res[2];
}
function randomStrings(array) {
    var res = [];
    for (var index = 0; index < 3; index++) {
        res.push(array[randomIndex(array.length)]);
    }
    return res;
}
function randomIndex(len) {
    return Math.floor(Math.random() * (len));
}
