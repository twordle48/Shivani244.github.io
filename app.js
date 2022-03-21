document.addEventListener('DOMContentLoaded', () => {
  const gridDisplay = document.querySelector('.grid')
  const resultDisplay = document.getElementById(' result')
const width = 5
const height = 6
let squares = []

function generate() {
    let randomNumber = Math.floor(Math.random() * squares.length)
     if (squares[randomNumber].innerHTML == 0) {
        squares[randomNumber].innerHTML = 2
     }
}

function createBoard() {
    for (let i=0; i < width*height; i++){
        square = document.createElement('div')
        square.innerHTML = 0
        gridDisplay.appendChild(square)
        squares.push(square)
   
    }
    generate()  
}

createBoard()

//random grid





})
