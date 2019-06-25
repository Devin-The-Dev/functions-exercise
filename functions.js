// a variable with a function that prints your name
let name = function (first) {
    console.log('Hello, my name is ' + first + ".")
}
name("Devin");

// Declare a function that takes 2 arguments then multiplies them and return the
// answer

let multiply = function (a, b) {
    return a * b
}
let number = multiply(2, 3);
console.log(number);

// Then create a function that takes the last function you created and divides the last 
// result by 2 and then return the answer

let divide = function () {
    return number / 2
}
console.log(divide());