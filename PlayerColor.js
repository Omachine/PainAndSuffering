let root = document.querySelector(':root')
let currentColor = localStorage.getItem('color')

const updatePlayerColor = (color) => {
    root.style.setProperty('--player-primary-color', color)
}

if (currentColor != null) {
    updatePlayerColor(currentColor)
}
