let isGameRunning = true;
let isPlayerMoving = false;
let points = 0;
let character = document.querySelector(".character");
let x = 0;
let y = 0;
let Character = document.getElementById("character");
let step = 150; // The number of pixels the character moves in each step
let cooldown = false; // Flag to indicate whether the character is in cooldown
let timerInterval;
let timeLeft = 20; // Start the timer at 20 seconds
let timerElement = document.createElement("div"); // Create a new div element for the timer

if (window.location.pathname == "/Character.html") {
  timerElement.id = "timer"; // Give the timer element an id so you can style it with CSS
  timerElement.textContent = "Time left: " + timeLeft; // Set the initial text content of the timer element
  document.body.appendChild(timerElement); // Add the timer element to the body of the document

  timerInterval = setInterval(function () {
    timeLeft--; // Decrease the time left by 1
    timerElement.textContent = "Time left: " + timeLeft; // Update the timer element with the new time left

    if (timeLeft <= 0) {
      clearInterval(timerInterval); // Stop the timer when it reaches 0
      isGameRunning = false;
    }
  }, 1000); // Run the function every 1000 milliseconds (1 second)
}

let pauseButton = document.getElementById("pause");

pauseButton.addEventListener("click", function () {
  if (pauseButton.textContent === "Pause") {
    clearInterval(timerInterval); // Pause the timer
    //console.log("Game paused", timerInterval); // Debugging line
    pauseButton.textContent = "Continue"; // Change the button text to "Continue"
    isGameRunning = false; // Pause the game
  } else {
    // If the button text is not "Pause", start the timer again
    timerInterval = setInterval(function () {
      timeLeft--; // Decrease the time left by 1
      timerElement.textContent = "Time left: " + timeLeft; // Update the timer element with the new time left
      //console.log("Timer running", timeLeft); // Debugging line

      if (timeLeft <= 0) {
        clearInterval(timerInterval); // Stop the timer when it reaches 0
        isGameRunning = false; // Pause the game
      }
    }, 1000);
    //console.log("Game continued", timerInterval); // Debugging line
    pauseButton.textContent = "Pause"; // Change the button text back to "Pause"
    isGameRunning = true; // Continue the game
  }
});

document.getElementById("restart").addEventListener("click", function () {
  window.location.href = "index.html"; // Navigate to the start page
});
if (timeLeft <= 0) {
  clearInterval(timerInterval); // Stop the timer when it reaches 0
  isGameRunning = false; // Pause the game
}
//-----Player------

window.addEventListener("keydown", function (event) {
  if (cooldown || !isGameRunning) return; // If the character is in cooldown or the game is paused, ignore the key press

  let left = character.offsetLeft; // Current left position
  let top = character.offsetTop; // Current top position

  switch (event.key) {
    case "ArrowLeft": // If the left arrow key is pressed
    case "a": // If the 'a' key is pressed
      if (x != 0) {
        x--;
        character.style.left = left - step + "px";
      }
      break;
    case "ArrowRight": // If the right arrow key is pressed
    case "d": // If the 'd' key is pressed
      if (x != 2) {
        x++;
        character.style.left = left + step + "px";
      }
      break;
    case "ArrowUp": // If the up arrow key is pressed
    case "w": // If the 'w' key is pressed
      if (y != 0) {
        y--;
        character.style.top = top - step + "px";
      }
      break;
    case "ArrowDown": // If the down arrow key is pressed
    case "s": // If the 's' key is pressed
      if (y != 2) {
        y++;
        character.style.top = top + step + "px";
      }
      break;
  }

  cooldown = true; // Set the cooldown flag

  setTimeout(function () {
    cooldown = false; // Remove the cooldown after 1 second
  }, 300);
});
