const board = document.querySelector('#board')
const SQUARE_NUMBER = 5000
const colors = ['#EE3231','#E65A25','#F05632','#F47A2F','#F7912F','#FAA32F','#FCB827','#FBD22E','#FAEA23','#F6F284']

for (let i = 0; i < SQUARE_NUMBER;  i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',() => setColor(square) )
    square.addEventListener('mouseleave',() => removeColor(square) )

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow =  `0 0 2px ${color},0 0 15px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = 'rgba(53, 53, 53, 0.1)'
    element.style.boxShadow =  `0 0 2px #272727`
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
