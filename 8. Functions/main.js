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
//Exercise 1 - level 1 - Create a function that takes a string and then logs that string out
/*
function greet(name) {
    console.log(`Hilsen ` + name);
}

greet(`Amalie`); //logs out Hilsen Amalie
*/

/*
function greeting() {
    console.log(`Hej med dig`);
}
greeting(); //logs out Hej med dig
*/

//Exercise 2 - level 1
//Create a function that takes a name and returns true if the first character is the character a otherwise false

function names() {
    const names = `kea or anna`;
    console.log(names.startsWith(`anna`, 7));
}
names();
