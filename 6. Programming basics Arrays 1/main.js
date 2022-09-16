//Video 1: JavaScript Arrays

/*
//let selectedColors = []; //Empty array literal
const selectedColors = [`red`, `blue`]; //to elements red og blue i en array
//console.log(selectedColors)       // Her finder man index [0]: red og [1]: blue
selectedColors[2] = `1`;
//console.log(selectedColors[1]);       // element i array med [index]
console.log(selectedColors.length);     //Fortæller hvor mange elements der er i en array = 3
*/

//Video 2: How to use JS Array Methods
//let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

//console.log(supers[supers.length - 1]); //Betyder at Aquaman kun dukker op

//length
//supers.length = 2   //De to første dukker op Superman og Batman
//console.log(supers);

//supers.length = 3   //Den tredje ses som empty, da den ikke eksistere grundet overstående
//console.log(supers);

//indexOf
//console.log(supers);
//console.log(supers.indexOf("Flash")); // = 2, da Flash har index[2]. Hvis man skriver et ugyldigt element bliver resultat = -1

//includes
//console.log(supers.includes("Batman")); // = true
//console.log(supers.includes("Hest")); // = false, da værdien "Hest" ikke eksistere

//pop and shift
//console.log(supers.pop()); //pop fjerner den sidste item (Aquaman)
//console.log(supers);

//console.log(supers.shift()); //pop fjerner den første item (Superman)
//console.log(supers);

//push and unshift
//supers.push("Spider-Man");     //push tilføjer et nyt item sidst i array
//console.log(supers);

//supers.unshift("Thor")     //unshift tilføjer et nyt item først i array
//console.log(supers);

//Both push and unshift in one:
//supers.push("Spider-Man");
//supers.unshift("Thor")

//concat
// Ny let med ny navne blandet med de gamle navne. Dog ændre det ikke navnene i den orginale array
//let newSupers = supers.concat(["Wolerine", "Cyslops", "Professor X"])
//console.log(supers);
//console.log(newSupers);

//Join - tager en array til en string
//console.log(supers.join(", "));

//split
//let supers = "superman, Batman, Flash"
//let supersArrary = supers.split(", ");
//console.log(supersArrary);





//Warmup exercises (individual)
//Exercise 1 -Now, using the correct indexes, get the following values from the array:
//const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];

/*
//strawberry
const indexOfstrawberry = fruits.indexOf("strawberry")
console.log(indexOfstrawberry); //2

//kiwi
const indexOfkiwi = fruits.indexOf("kiwi")
console.log(indexOfkiwi); //3

//orange
const indexOforange = fruits.indexOf("orange")
console.log(indexOforange); //5

//banana
const indexOfbanana = fruits.indexOf("banana")
console.log(indexOfbanana); //0
*/

//Exercise 1 - Then, replace apple with raspberry, and replace fig with pineapple
//const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
/*
fruits.splice(1,1,  "raspberry");
fruits.splice(4, 1,"pineapple");
console.log(fruits);
*/

//Exercise 2 - Write some code that can get the last element in an array
/*
const names = ['Peter', 'Susan', 'Charlotte'];
const lastElementInTheArray = names.pop();
console.log(lastElementInTheArray); // Charlotte
*/
/*
const moreNames = ['Peter', 'Susan', 'Charlotte', 'Abdullah'];
const lastElementInTheArray = moreNames.pop();
console.log(lastElementInTheArray); // Abdullah
*/

//Exercise 3 - Create an array with numbers: 2,3,4,5
//To input a number "1" at the start of the array

/*
const numbers = [2,3,4,5];
numbers.unshift(1);
console.log(numbers);
*/

//Pair Programming (Random groups):
//Exercise 1 - Write an array with 4 names and Write a program that prints each name
/*
const names = ["Simba", "Mynthe", "Pelle", "Modig"];
names.forEach(consoleIthem);
function consoleIthem(item, index, arr) {
    console.log(item);
}
*/

//Exercise 2 - Write an array with 5 numbers
// Write a program that calculates the average of the numbers (using loops)
/*
let numbers = [1,2,3,4,5]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers [i];
}
console.log(sum/numbers.length);
 */

//Exercise 3 - Write an array with 5 strings. Write a program that adds every string to a new array
//             Except if the string has more than 3 characters
/*
const string = ["adddd","b","c","dhhhh","abcde"] //array with 5 strings
const newArray = []; //new array is placed here

for (let i = 0; i < string.length; i++)  //for loop
    if (string[i].length > 3) { //string has more than 3 characters
        newArray.push(string[i]);//push - tilføjer et nyt element i slutningen
        console.log(newArray);//her logger man den
    }
*/

//Exercise 4
//Write an array with numbers 1...10.
//Write a program such that the last number is printed first up until the first number of the array
//When the countdown 10, 9 ,8 ..., 1 has passed the program will print out: BOOM
/*
const numbers = [1,2,3,4,5,6,7,8,9,10];

for (let i = 10; i >= 1; i--) {
console.log(i);
if (i == 1)
    console.log("BOOM");
}
*/

//Exercise 5
//Write an array with a mixed combination of strings and integers
//If the array contained most strings it will output "Most strings"
//Otherwise it will print "Most integers"
/*
const mixed = [1, "two", 3, "four", 5, "six"];
let numOfstring = 0;
let numOfInts = 0;

for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] === "string") {
        numOfstring = numOfstring + 1;
    }
    else if (typeof mixed[i] === "number") {
        numOfInts = numOfInts +1;
    }
}
if (numOfInts > numOfstring) {
    console.log("Most intefers");
}
else {
    console.log("Most string");
}
 */

//Exercise 6
//Write an array with 5 numbers
//Write a program that finds the maximum number of the array
/*
let array = [1,2,3,4,5]
let max = array[0]

for(let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(`Maximum number is: ${max}`);
 */