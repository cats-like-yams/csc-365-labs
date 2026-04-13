/*Karen Bojorquez Gil */
"use strict";

// prompt the user for their favorite color
let favColor = prompt("Enter your favorite color:");

// changes the yahtzee text colors to the user's inputted favorite color
document.querySelector("h1").style.color = favColor;

let diceLabels = document.querySelectorAll(".dice p");
diceLabels.forEach(function(label) {
    label.style.color = favColor;
});

//function to roll a single die
function rollDie(dieNumber) {
    // random number between 1 and 6
    let randomNumber = Math.floor(Math.random() * 6 + 1);

    // creates the image id based on the die number
    let imgId = `img${dieNumber}`;

    // creates the image path based on the random number
    let imgSrc = `images/dice${randomNumber}.png`;

    // updates the image source to show the rolled die
    document.getElementById(imgId).src = imgSrc;
}

// loops through all 5 dice and rolls them
function rollAllDice() {
    for (let i = 1; i <= 5; i++) {
        rollDie(i);
    }
}

// event listener for the roll button
document.querySelector("button").addEventListener("click", function() {
    rollAllDice();
});

// rolls once when the page loads
rollAllDice();