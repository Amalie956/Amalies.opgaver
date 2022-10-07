//Video 1: functions
/*
function greet() {
    console.log(`Hello World`);
}
greet();
*/

/*
function greet(name, lastName) {
    console.log(`Hello ` + name + `` + lastName);
}
greet(`Amalie`, ` Andersen`);
greet(`Julie`, ` Brandt`);
*/

//Video 2
/*
let color = `red` //globalt

function start() {
    const message = `hi`;
    const color = `blue`; //lokalt
    console.log(color);
}

function stop() {
    const message = `bye`
}
start ();
 */

//Exercises - Functions calling, defining
//Exercise 1 - level 1. Create a function that takes a string and then logs that string out
function someFunctionName() {
    const loc = "hello";
    const locO = "abcd";
    console.log(loc);
    console.log(locO);
}
//someFunctionName();


//Exercise 1.1 - level 1. Create a function that adds two numbers together
function add(a, b) {
    const sum = a + b
    console.log(sum);
}
//add(10, 10);


//Exercise 2 - level 1. Create a function that takes a name and returns true if the first character is the character an otherwise false
function firstCharacter(firstA) {
    if (firstA[2] === `a`) {
        return true;
    }
    else {
        return false;
    }
}
console.log(firstCharacter("kea"));
console.log(firstCharacter("anna"));


//Exercise 3 - level 1.
function celsiusToFahrenheit(celsius) {
    let CONVERTED_TEMPERATURE;
    CONVERTED_TEMPERATURE = celsius * 9/5 + 32;
    return CONVERTED_TEMPERATURE;
}
//console.log(celsiusToFahrenheit(30) + " degree fahrenheit");

//Exercise 4 - level 2

