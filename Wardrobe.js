document.querySelectorAll(".color").forEach(function (button) {
  button.addEventListener("click", function (event) {
    updatePlayerColor(event.target.id);
  });
});

document.onsubmit = (event) => {
  localStorage.setItem("color", currentColor);
  event.preventDefault();
  window.location.href = "Start.html";
};
// Add a click event listener to each color button
//for (let i = 0; i < colorButtons.length; i++) {
//  colorButtons[i].addEventListener("click", function () {
//    // When a color button is clicked, change the background color of the character to the background color of the clicked button
//    character.style.backgroundColor = window.getComputedStyle(
//      colorButtons[i]
//    ).backgroundColor;
//  });
//}
