//Exercise 1 - Level 1. Log 4 statements like these to the console, but in different languages
/*
console.log("Hello World"); //English

console.log("Halo, dunia!"); //Indonesian

console.log("Ciao, mondo!"); //Italian

console.log("Hola, mundo!"); //Spanish
*/

//Exercise 2 - Level 1 - Add a variable greeting and assign a greeting of your choice to the variable
// Print your greeting to the console 3 times. You should see the greeting 3 times on the console, one on each line
/*
let greeting = "Fredag";
console.log(greeting);
console.log(greeting);
console.log(greeting);
*/

//Exercise 3 - Consider this code, it has a syntax error in it.
// Fix it so that when running this file it logs the message 'I'm awesome!
//console.log('I'm awesome'!;
/*
console.log("`I'm awesome!`");
*/

//Exercise 4 - Using string literals, string length and the following code
// Log out a string that says: "My name is peter. It has 5 characters"
/*
const namez="Peter";
console.log(namez.length);
console.log(`My name is ${namez}. It has ${namez.length} characters.`)
*/

//Exercise 5 - Level 1 - With pen and paper write down what the following will log out
/*
console.log(typeof 3 + 5);
console.log(typeof "3 + 5");
console.log(typeof "+");
console.log(typeof "");
console.log(typeof "3" + 5);
console.log(typeof typeof 3+5);
*/

//Exercise 6 - Create two variables numberOfStudents and numberOfteachers
//Log a message that displays the total number of students and teachers
/*
let numberOfStudents = 33;
let numberOfTeachers = 2;
console.log(numberOfTeachers + numberOfStudents);
*/

//Exercise 7 - Now log out the percentage of students and percentage of teachers
/*
let numberOfStudents = 33;
let numberOfTeachers = 2;
const totalNumber = numberOfTeachers + numberOfStudents
console.log(numberOfStudents * 100 / totalNumber)
console.log(numberOfTeachers * 100 / totalNumber)

console.log(Math.round(94.28571428571429));
console.log(Math.round(5.714285714285714));
*/

//Exercise 8 - Part 2: Now we will modify the program so that you can order multiple pizzas
//and also decide if the pizzas should be family size

//Create a new variable to store the amount of pizzas you would like to order
/*
const pizza = 3;
console.log(pizza)

const familyPizza = true;
console.log(familyPizza)

let pizzaPrice = 25;
let familyPizzaPrice = 50;

//Now write a formula to calculate the total price of your pizza order, and save it in a variable called totalPrice
const totalPrice = (pizzaPrice*3)+ familyPizzaPrice;
console.log(totalPrice);

let pizzaNavne = "Margarita";
let familyPizzaNavn = "Peperoni";


console.log(`${pizza} almindelig ${pizzaNavne}. ${familyPizza} til familie pizza, det skal være med ${familyPizzaNavn}. Prisen bliver ${totalPrice}kr`)
 */