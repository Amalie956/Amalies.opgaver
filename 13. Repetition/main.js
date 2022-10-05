/*
// printing 1-10
for(let i = 0; i < 10; i++) {
    console.log(i)
}

//Nested loops
for(let i = 0; i < 5; i++) {
    console.log(i)
    for(let j = 0; j <5; j++) {
        console.log(hej)
    }
}

//foreach
const artists = ["Britnet Spears", "Bruno Mars", "pop smoke"];
artists.forEach(e => console.log(e));

for(let i=0; i < artists.length; i++) {
    console.log(artists[i]);
}
*/

//Javascript Recap
/*
//Loops
//Exercise level 1 - Create a for loop that goes from 90-100
for(let i = 90; i <= 100; i++) {
    console.log(i)
}

//Exercise level 1 - Create a for loop that runs 10 times
for(let i = 0; i < 10; i++) {
    console.log("Hello World")
}

//Exercise level 1 - Create a for loop that runs the number of times that an array has items
const numberOfArray = [1,2,3,4,5];
console.log(numberOfArray.length);

//Exercise level 2 - Create a for loop that iterates through an array logging out all the names in uppercase
const arrayUpper = ["hej", "hello", "hey"];
arrayUpper.forEach(a => console.log(a.toUpperCase()));


//Arrays
//Exercise - Level 1 - Lav et array af strenge med 6 elementer. Log det første element ud og elementet på index 4
const arrayFirstElement = ["Amalie", "Lukas", "Modig", "Pelle", "Heidi", "Henriette"];
console.log(arrayFirstElement[0]);
console.log(arrayFirstElement[4]);

//Exercise - level 1 - Log out last element of the following array
const prices = [100, 300, 489, 532, 34];
console.log(prices.pop());
//console.log(prices[4]);

//Exercise - level 1 - Add an extra price to the end of the prices array
const pricesExtra = [100, 300, 489, 532, 34];
pricesExtra.push(23);
console.log(pricesExtra);


//Exercise - level 2 - Print "First is bigger" if the first element is bigger than the last element of the array
const firstIsBigger = [100, 50, 25];

const firstElement = firstIsBigger[0];
const lastElement = firstIsBigger[firstIsBigger.length -1];

if(firstElement > lastElement) {
    console.log("First is bigger");
}



// Exercise - level 3 - Using the prices array print the average of the prices
let sum = 0;
for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
}
console.log(sum);

const average = sum / prices.length;
console.log(average)



//Objects & Functions exercises
//Level 1 - Write an object that represents a cat from The Sims
const cat = {
    name: "Modig",
    age: 1,
    color: "orange",
    hunger: "hungry",
    isFemale: true,
}
//Level 1 - Using the cat object - Print a string with all properties of the cat: name, age, color, hunger and isFemale
console.log(cat.name);
console.log(cat.age);
console.log(cat.color);
console.log(cat.hunger);
console.log(cat.isFemale);
*/

//Level 2 - Using the cat object - Write a function that receives a Cat object and prints the name and age of the cat
const newCat = {
    name: "Modig",
    age: 1
};

function newCat1(cat) {
    console.log(cat.name, cat.age)
}

newCat1(newCat);


//Level 2 - Using the list of cats -
//Write a function that takes a list of cats and returns a single string with all their names
//Print the string outside of the function scope

const arrCat = [
    {
        name: "Hannibal"
    },
    {
        name: "Lukas"
    },
    {
        name: "Mimi"
    }
];

function listOfCats(cats) {
    let nameOfCats = " "
    for(let i = 0; i < cats.length; i++){
        nameOfCats = nameOfCats + " " + cats[i].name
    }
    return nameOfCats
}
console.log(listOfCats(arrCat));

