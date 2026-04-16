/* Karen Bojorquez Gil */

// selects drum buttons
let buttons = document.querySelectorAll(".drum");

// adds click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    let key = this.textContent;
    playSound(key);
  });
});

// adds keydown event listener to the document
document.addEventListener("keydown", function(event) {
  playSound(event.key);
});

// function to play sound based on the key pressed
function playSound(key) {
  switch (key) {
    case "a":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "f":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      console.log(key);
  }
}

