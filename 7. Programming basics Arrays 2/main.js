//Foreach
//Exercise 1 - Write an array with 3 strings and Using foreach - print each string
/*
const strings = ['kanin', 'hund', 'kat'];
strings.forEach(strings => console.log(strings));
*/


//Exercise 2 - Write an array with 5 numbers. Using foreach - write a program that sums the number//
/*
const numbers = [1,2,3,4,5];
sums= 0
const sum = numbers.reduce((sums,value) => {
    return sums + value;
});
console.log(sum);
*/

/*
//Exercise 3 - Write an array with 5 numbers. Using foreach - write a program that calculates the average of the numbers
const numbers = [1,2,3,4,5];
const average = numbers.reduce ((a, b) => a+b, 0) / numbers.length;
console.log(average);
*/

//Filter method
//Exercise 1 -
//Write an array with 5 numbers - some larger than zero some smaller
//Using the filter function of the array
//Create a new array with all values larger than 0
/*
const numbers = [-2,-1,0,1,2]
let largerThanZero = []

 largerThanZero = numbers.filter(function(number){
    return number > 0;
});
console.log(largerThanZero);
*/

//Exercise 2
//Write an array with 5 strings. Using the filter function of the array:
//-	Create a new array with all strings having a length of 5 or higher
/*
const fives = ['Amalie','Lukas', 'Amanda', 'Skye', 'Julie'];
let lengthOf = fives.filter(function(five) {
    if (five.length > 5) {
        return five
    }
});
console.log(lengthOf);
*/

//Exercise 3
//Write an array with 5 strings
//Write a program that adds every string to a new array
//Except if the string has more than 3 characters
/*
const fives = ['Amalie','Lukas', 'Amanda', 'S', 'J']
const newArray = [];

for (let i = 0; i < fives.length; i++)
    if(fives[i].length <= 3) {
        newArray.push(fives[i]);
    }
console.log(newArray);
*/

//Exercise 4
//Increment each number by 1
//Add each number to a new array
/*
const numbers = [1,2,3,4,5];
let newArray = []

numbers.forEach((num, index) => {
    newArray.push(num + 1)
});
console.log(numbers);
console.log(newArray);
*/
