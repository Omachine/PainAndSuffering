let isGameRunning = true;
let isPlayerMoving = false;
let points = 0;
var character = document.querySelector(".character");

document.getElementById("pause").addEventListener("click", function () {
  character.style.animationPlayState = "paused";
});

document.getElementById("restart").addEventListener("click", function () {
  window.location.href = "Start.html"; // Navigate to the start page
});

//-----Player------

class Player {
  constructor() {
    this.html = document.getElementById("character" + id);
    this.x = 0;
    this.y = 0;
    this.IsFacingLeft = false;
  }
  goTo(direction) {
    if (!this.checkPosition(direction) || !isGameRunning) return;
  }
  checkPosition(direction) {
    return !(
      this.x + direction[0] < 0 ||
      this.x + direction[0] > 2 ||
      this.y + direction[1] < 0 ||
      this.y + direction[1] > 2
    );
  }
}
var character = document.getElementById("character");
var step = 150; // The number of pixels the character moves in each step

window.addEventListener("keydown", function (event) {
  var left = character.offsetLeft; // Current left position
  var top = character.offsetTop; // Current top position

  switch (event.key) {
    case "ArrowLeft": // If the left arrow key is pressed
      character.style.left = left - step + "px";
      break;
    case "ArrowRight": // If the right arrow key is pressed
      character.style.left = left + step + "px";
      break;
    case "ArrowUp": // If the up arrow key is pressed
      character.style.top = top - step + "px";
      break;
    case "ArrowDown": // If the down arrow key is pressed
      character.style.top = top + step + "px";
      break;
  }
});
