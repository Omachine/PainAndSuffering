const Colors = {
  orange: ["#ffa500", "#7a0839"],
  black: ["#132fd1", "#09158f"],
  white: ["#127f2e", "#0a4d2e"],
};

let root = document.querySelector(":root");
let currentColor = localStorage.getItem("color");

const updatePlayerColor = (color) => {
  if (color in Colors) {
    currentColor = color;
    root.style.setProperty("--player-primary-color", Colors[color][0]);
    root.style.setProperty("--player-secundary-color", Colors[color][1]);
  }
};

if (currentColor != null) {
  updatePlayerColor(currentColor);
}
