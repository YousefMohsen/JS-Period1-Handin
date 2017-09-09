
var input = process.argv;
var result = 0;
input.map(function (number) {
    if (!isNaN(number)) { result += number; }
});

console.log("Result is: " + result);
