const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen') 
const timeLIst = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#8fd3f4 ', '#68e0cf ', ' #229efd ', '#2be271', '#8bd612'];
let time = 0
let score = 0
startBtn.addEventListener('click',(event) =>{
    event.preventDefault()
    screens[0].classList.add('up')
} ) 

timeLIst.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event =>{
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        creatRandomCiler()
    }
})

function startGame() {
    setInterval(dcrTime, 1000)
    setTime(time)
    creatRandomCiler()
}

function dcrTime () {
    if (time === 0){
        finishGame()
    }else{
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    } 
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    // timeEl.parentNode.remove()
    timeEl.parentNode.classList.add('hide')
    board.innerHTML =`<h1>обший счЁт:<span class="primary">${score}</span></h1>`
}
function creatRandomCiler() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    let color = getRandomColor()
    circle.style.backgroundColor = color
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    


    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

