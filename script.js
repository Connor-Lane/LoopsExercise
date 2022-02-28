// 1
for (i = 1; i <= 7; i++) {
    console.log(i);
}

console.log(`=========================`);

// 2
for (i = 5; i <= 25; i += 4) {
    console.log(i);
}

console.log(`=========================`);

// 3a
const wizards = [`Harry Potter`, `Hermione Ganger`, `Ron Weasley`]
console.log(wizards);

// 3b
for (names of wizards) {
    console.log(names);
}

console.log(`=========================`);

// 4a
let harryPotterMovies = 0;
console.log(harryPotterMovies);

// 4b
while (harryPotterMovies < 8) {
    harryPotterMovies++;
}
// 4c
console.log(harryPotterMovies);

console.log(`=========================`);

// BONUS

// 5a
const hogwartsHouses = [`Gryffindor`, `Hufflepuff`, `Ravenclaw`, `Slytherin`];
console.log(hogwartsHouses);

// 5b
for (house of hogwartsHouses) {
    for (letters of house) {
        console.log(letters);
    }

    console.log(`---------`);

}

console.log(`=========================`);

// 6a
const quote = [`Yer`, `A`, `Wizard`, `Harry`];
console.log(quote);

// 6b
let magicQuote = ``;
for (i = 0; i < quote.length; i++) {
    magicQuote = `${magicQuote} ${quote[i]}`
}
console.log(magicQuote);

console.log(`=========================`);

// 7
for (i = 1; i <= 25; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Expecto Patronum`);
    } else if (i % 3 === 0) {
        console.log(`Expecto`);
    } else if (i % 5 === 0) {
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
}