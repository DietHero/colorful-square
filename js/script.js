const square = document.querySelector('.square')

window.addEventListener (
    "keydown",
    changeColor
)

function changeColor (event){
    switch (event.key) {
        case "ArrowUp": 
        red()
        break;
        case "ArrowDown": blue()
        break;
        case "ArrowLeft": yellow()
        break;
        case "ArrowRight": green()
        break;
        default: break
    }

}
function red() {
    square.setAttribute('style', 'background-color: red')
 }
 function blue() {
    square.setAttribute('style', 'background-color: blue')
 }
 function yellow() {
    square.setAttribute('style', 'background-color: yellow')
 }
function green() {
        square.setAttribute('style', 'background-color: green')
     }

