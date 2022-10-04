//Exercise 1 - level 1. Create a sum function using only arrow functions
function sum(a,b, c) {
    return a + b + c
}
//Arrow function
const sum2 = (a, b, c) => a + b - c
//console.log(sum2(1,1,1)); // 1

//Exercise 2 - level 1. Write a function that takes three numbers as parameter, sums the integers and returns the result
function threeNumbers(number1, number2, number3) {
    return number1 + number2 + number3
}
//console.log(threeNumbers(10,10,10)); // 30

//Exercise 3 - level 1. Write a function that returns a string with an emoji added to the end. You choose the emoji
function name(a, b) {
return 'Amalie' + '💰'
}
//console.log(name("amalie",'💰')); // Amalie💰

//Exercise 4 - level 1. Write a method that takes a string as parameter and returns the string in uppercase
function string(name) {
    return 'name'
}
//console.log('amalie'.toUpperCase());
const uppercaseString = ('amalie');
//console.log(uppercaseString.toUpperCase()); // AMALIE

//Exercise 6 - level 1. Write a function that checks if the last character is a questionmark
/*
function lastCharacter(questionmark) {
    if (questionmark[questionmark.length -1] === `?`) {
        return true;
    }
    else {
        return false;
    }
}
console.log(lastCharacter('Hello!')); // false
console.log(lastCharacter('Denmark')); // false
console.log(lastCharacter('How are you?')); // true
 */
