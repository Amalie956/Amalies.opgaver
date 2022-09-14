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
const balance = 900

if (balance > 1000) {
    console.log("I am rich");
} else if (balance < 1000) {
    console.log("I am poor");
}
*/

//Exercise 3 - level 2
//Create a small program that gives you a message depending on your mood! It should: Use a variable called mood

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

