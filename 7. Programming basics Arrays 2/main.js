//Exercise 1 - Write an array with 3 strings and Using foreach - print each string
/*
const strings = ['kanin', 'hund', 'kat'];
strings.forEach(strings => console.log(strings));
*/


//Exercise 2 - Write an array with 5 numbers. Using foreach - write a program that sums the number//
const numbers = [1,2,3,4,5];
sums= 0
const sum = numbers.reduce((sums,value) => {
    return sums + value;
});
console.log(sum);

//Exercise 3 - Write an array with 5 numbers. Using foreach - write a program that calculates the average of the numbers
const numbers = [1,2,3,4,5];
const average = numbers.reduce ((a, b) => a+b, 0) / numbers.length;
console.log(average);

//Exercise 1