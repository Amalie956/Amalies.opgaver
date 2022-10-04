//Exercise 1 - level 1. The objects below have some syntax issues
/*
const kitten = {
    furColour: 'orange',
    age: 23
};
console.log(kitten.age) // 23

const laptop = {
    brand: "Lenovo",
    ram: "5GB"
};

console.log(laptop.ram) // 5GB

const phone = {
    operatingSystem: "iOS",
    hasStylus: true,
    megapixels: 12,
    "batteryLife": "24 hours"
};
console.log(phone.batteryLife) // 24 hours
*/

//Exercise 2 - level 1. Create an object that describes you
const minverden = {
    name: "Amalie",
    age: 24,
    by: "Næstved"
};
//console.log(minverden.by) // Næstved

//Exercise 3 - level 1. Console.log the values of each property of "kitten"
/*
let kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown",
};

console.log(kitten.ageMonths) // 3
console.log(kitten.isFemale) // true
console.log(kitten.furColour) // brown
*/

//Exercise 4 - level 1. Write code in the space provided so that the expected values output. it should output: Rex and true
/*
const dog = {
    name: "Billy",
    wantsToPlay: false,
};

dog.name = "Rex"
dog.wantsToPlay = true

console.log(dog.name); // Rex
console.log(dog.wantsToPlay); // true
*/

//Exercise 5 - level 2
const astronautsInSpace = {
    people: [
        {
            name: "Oleg Artemyev",
            craft: "ISS"
        },
        {
            name: "Denis Matveev",
            craft: "ISS"
        },
        {
            name: "Sergey Korsakov",
            craft: "ISS"
        },
        {
            name: "Kjell Lindgren",
            craft: "ISS"
        },
        {
            name: "Bob Hines",
            craft: "ISS"
        },
        {
            name: "Samantha Cristoforetti",
            craft: "ISS"
        },
        {
            name: "Jessica Watkins",
            craft: "ISS"
        },
        {
            name: "Cai Xuzhe",
            craft: "Tiangong"
        },
        {
            name: "Chen Dong",
            craft: "Tiangong"
        },
        {
            name: "Liu Yang",
            craft: "Tiangong"
        }
    ],
    message: "success"
};

// 5.1. The number of astronauts in space right now
const count = Object.values(astronautsInSpace.people).length
//console.log(count) // 10


// 5.2. The name of the craft of the last person in the array
const lastPerson = astronautsInSpace.people[astronautsInSpace.people.length - 1].craft;
//console.log(lastPerson); // Tiangong

// 5.3. The lastname of the first astronaut in the ISS
const lastName = astronautsInSpace.people[0].name
//console.log(lastName.split(" ").pop()); // Artemyev

//1 - What To Wear
function clothesToWear(celsius) {
    if (celsius <= 15) {
        return "Du skal tage din jakke på!";
    } else {
        return "Nu kan du begynde at tage sommertøj på";
    }
}
console.log(clothesToWear(13));




//2 - Dice game

function diceGame(numberOfTimes) {
    let Hits6InEveryRoll = 0;
    for (let i = 1; i <= numberOfTimes; i++) {
        let logOut6 = Math.floor(Math.random() * 6) + 1;
        console.log(logOut6)
        if (logOut6 === 6) {
            Hits6InEveryRoll  = Hits6InEveryRoll  + 1;
            console.log("you hit 6!");
        }
    }
    if (Hits6InEveryRoll  === numberOfTimes) {
        console.log("jackpot");
    }
}
diceGame(1););