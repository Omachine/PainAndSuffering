let color = "orange";

document.querySelectorAll(".color").forEach(function (button) {
  button.addEventListener("click", function (event) {
    updatePlayerColor(event.target.id);
    color = event.target.id;
  });
});

document.onsubmit = (event) => {
  localStorage.setItem("color", color);
  event.preventDefault();
  window.location.href = "index.html";
};
