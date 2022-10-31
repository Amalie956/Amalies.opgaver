const emoji = require('node-emoji') //main.js
const addTwoNumbers = require('./numbers.js'); //numbers.js
const printsRockets = require('./print-rockets.js'); //print-rockets.js
const nameCheck = require('./name-check.js'); //name-check.js

//console.log(emoji.random())
//console.log(addTwoNumbers(10,10));
//console.log(printsRockets(4));
const names = ["Hans", "Amalie", "Jens"];
const x = nameCheck(names, "Amalie");
console.log(x)