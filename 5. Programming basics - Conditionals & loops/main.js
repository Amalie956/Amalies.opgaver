// Video1: Boolean operators. Equality, relational and logical operators //
// The equality operator (==)
/*
console.log(1 == 1)
console.log(1 != 1)
console.log(1 != 2)

console.log(1 == "1")
console.log("1 === \"1\"", 1 === "1")

console.log("a" === "a")
*/

// Relational operators
/*
console.log(1 > 2) // Er 1 større end 2 = false
console.log(2 > 0) // Er 2 større end 0 = true

console.log(1 > 1)
console.log(1 >= 1) // Er 1 størrer eller lig 1 = true

const accountFunds = 1000;
const televisionPrice = 2000;
console.log("kan jeg købe en television?", accountFunds > televisionPrice)
*/

// Logical operators
// && = and - Når man bruger "&&" skal begge være true
/*
console.log(true && true)   = true
console.log(false && true)  = false
console.log(false && false) = false


// || = or -  Når man bruger "||" skal én af dem være true

console.log(true || true)   = true
console.log(true || false)  = true
console.log(false || false) = false
*/

//
/*
const isUserLoggedIn = true;

const accountType = "premium";
console.log(isUserLoggedIn && accountType == "premium")

console.log(accountType == "premium" || accountType === "vip")
*/

//Video 2: - if else sentence//
/*
const isHappy = false;

//if and else sentence
if (isHappy == true) {
    console.log("I am happy");
} else {
    console.log("im not happy")
}
*/

/*
// if elseif and else
const mood = `choked`;

if (mood === `happy`) {
    console.log("i am happy") // er mood happy?
} else if (mood === `surprised`) {
    console.log("i am surprised")
}else if (mood === `choked`) {
    console.log("i am choked")
} else {
    console.log("i am not sure")
}

console.log("if sentence finished")
 */

//Video 3: - For loop//
/*
let i = 0;
//Det her er det samme som nedestående = i++;
i = i + 1;
i = i + 1;
i = i + 1;
*/

// i++;
/*
i++;
i++;
i++;
console.log(i)
*/

/*
for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log("loop done");
*/

/*
// Loop that runs from 30 - 10
for (let i = 30; i >= 10; i--) {
    console.log(i);
}
 */

//Exercise 2.1 - level 1
//Create a variable called balance. If balance is larger than 10000 log out I am rich 💰. Otherwise log out I am poor
/*
const balance = 100000

if (balance > 10000) {
    console.log("I am rich");
} else if (balance < 10000) {
    console.log("I am poor");
}
*/

//Exercise 3 - level 2
//Create a small program that gives you a message depending on your mood! It should: Use a variable called mood
/*
const mood = 5;

if (mood === "happy") {
    console.log("Good job, you're doing great!")
} else if (mood === `sad`) {
    console.log("Every cloud has a silver lining")
} else if (typeof mood === "number") {
    console.log("Beep beep boop")
} else {
    console.log("I'm sorry, I'm still learning about feelings!")
}
*/

//Exercise 5 - level 1
//Print out Hello World 3 times
/*
for (let i = 0; i < 3; i++) {
    console.log("Hello World");
}
*/

/*
//Use a loop to print the numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
*/

/*
//Use a loop to print a * 10 times
for (let i = 1; i <= 10; i++) {
    console.log("a*", i);
}
*/

/*
//Use a loop to print the numbers starting from 5 to -5
for (let i = 5; i >= -5; i--) {
    console.log(i)
}
*/

/*
//Use a loop to print every third number from 5 to 30
for (let i = 5; i <= 30; i += 3) {
    console.log(i)
}
*/

/*
//Exercise 7. Level 2 - Using a for loop write a random number of hashtags (#) (Maximum 10) to the webpage
for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
    console.log("#")
}
*/

//Exercise 8. Level 2 - Using a for loop print all numbers from 1 to 10
//If the number is larger than 5 also print "INDEX is larger than 5"
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(number => {
    if (number > 5) {
        console.log(number + " is larger than 5");
    } else {
        console.log(number);
    }
});
*/

/*
for (let i = 1; i <= 10; i++) {
    if (i > 5) {
        console.log(i + " is larger than 5");
    } else {
        console.log(i);
    }
}
*/

//Exercise 8.1. Level 2 - Using a for loop and conditionals print out the following
/*
for (let i = 1; i <= 10; i++) {
    if (i <= 3) {
        console.log(i + " is a small number");
    } else if (i <= 6) {
        console.log(i + " is a relatively small number");
    } else if (i <= 9) {
        console.log(i + " is a large number");
    } else if (i <= 10) {
        console.log(i + " is a ten");
    } else {
        console.log(i);
    }
}
*/

//Exercise 9 - level 2
//Create a for loop that logs out each individual character in a string
//With the last character log out "This is the last character"
/*
const character = 'string';

for (let i = 0; i < character.length; i++){
    console.log(character[i]);
    if (i === character.length-1) {
        console.log("This is the last character");
    }}
*/

//Exercise 9.1 - level 3
//Create a for loop that logs out each individual character in a string
//With the middle character log out "This is the middle character"
/*
const character = 'hello';

for (let i = 0; i < character.length; i++) {

    if (i === Math.floor(character.length / 2)) {
        console.log(character[i] + " This is the middle character");
    }
    else
        console.log(character[i]);
}
 */

//Exercise 11 - level 3

var x,y,chr;
for(x=1; x <=9; x++)
{
    for (y=1; y < x; y++)
    {
        chr=chr+("#");
    }
    console.log(chr);
    chr='';
}
console.log("(a)");





