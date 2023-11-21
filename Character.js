let isGameRunning = true
let isPlayerMoving = false
let points = 0
let character = document.querySelector('.character')
let x = 0
let y = 0

document.getElementById('pause').addEventListener('click', function () {
    character.style.animationPlayState = 'paused'
})

document.getElementById('restart').addEventListener('click', function () {
    window.location.href = 'Start.html' // Navigate to the start page
})

//-----Player------

var step = 150 // The number of pixels the character moves in each step

window.addEventListener('keydown', function (event) {
    let left = character.offsetLeft // Current left position
    let top = character.offsetTop // Current top positions

    switch (event.key) {
        case 'ArrowLeft': // If the left arrow key is pressed
            if (x != 0) {
                x--
                character.style.left = left - step + 'px'
            }
            break
        case 'ArrowRight': // If the right arrow key is pressed
            if (x != 2) {
                x++
                character.style.left = left + step + 'px'
            }
            break
        case 'ArrowUp': // If the up arrow key is pressed
            if (y != 0) {
                y--
                character.style.top = top - step + 'px'
            }
            break
        case 'ArrowDown': // If the down arrow key is pressed
            if (y != 2) {
                y++
                character.style.top = top + step + 'px'
            }
            break
    }
})
