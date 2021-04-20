const square = document.querySelector('.square')

function extractPixelsFromString (pixelsString) {
    return Number(pixelsString.replace('px', ''))
}

function move(deltaX = 0, deltaY = 0) {
    const Top = extractPixelsFromString(square.style.top)
    const Left = extractPixelsFromString(square.style.left)  
    square.style.top = Top + deltaY + 'px'
    square.style.left = Left + deltaX + 'px'
}
   
function moveDown(deltaTop = 10) {
    move(0, deltaTop)
}

function moveRight(deltaLeft = 10) {
    move(deltaLeft, 0)
}
function moveUp(deltaTop = 10) {
    move(0, -deltaTop)
}
function moveLeft(deltaLeft = 10) {
    move(-deltaLeft, 0)
}

function red() {
    square.style.backgroundColor = 'red'
}
function blue() {
    square.style.backgroundColor = 'blue'
}
function yellow() {
    square.style.backgroundColor = 'yellow'
}
function green() {
    square.style.backgroundColor = 'green'
}


function change(event) {
    switch (event.key) {
        case "ArrowUp":
             moveUp(), red()
            break
        case "ArrowDown":
            moveDown(), blue()
            break
        case "ArrowLeft":
             moveLeft(), yellow()
            break
        case "ArrowRight":
             moveRight(), green()
            break
        case "Enter":
            square.innerText = "UŚMIECHNIJ SIĘ" 
        default: break 
    }

}

    window.addEventListener(
        "keydown",
        change
        )
        
 

