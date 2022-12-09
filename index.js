const buttonHold = document.querySelector('.btn--hold')
const buttonRoll = document.querySelector('.btn--roll')
const buttonNewGame = document.querySelector('.btn--new')
const currentScore0 = document.getElementById('current--0')
const currentScore1 = document.getElementById('current--1')
const score0 = document.getElementById('score--0')
const score1 = document.getElementById('score--1')
const playerName0 = document.getElementById('name--0')
const playerName1 = document.getElementById('name--1')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const dicePic = document.querySelector('.dice')
let isPlayerActive = true
score0.textContent = 0;
score1.textContent = 0;

buttonRoll.addEventListener('click', function () {
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice)
    if (isPlayerActive === true) {
        if (dice === 1) {
            dicePic.setAttribute('src', 'images/dice-1.png')
            currentScore0.textContent = '0'
            player0.classList.remove('player--active')
            player1.classList.add('player--active')
            isPlayerActive = false
        } else if (dice === 2) {
            dicePic.setAttribute('src', 'images/dice-2.png')
            currentScore0.textContent = dice + Number(currentScore0.textContent)
        } else if (dice === 3) {
            dicePic.setAttribute('src', 'images/dice-3.png')
            currentScore0.textContent = dice + Number(currentScore0.textContent)
        } else if (dice === 4) {
            dicePic.setAttribute('src', 'images/dice-4.png')
            currentScore0.textContent = dice + Number(currentScore0.textContent)
        } else if (dice === 5) {
            dicePic.setAttribute('src', 'images/dice-5.png')
            currentScore0.textContent = dice + Number(currentScore0.textContent)
        } else if (dice === 6) {
            dicePic.setAttribute('src', 'images/dice-6.png')
            currentScore0.textContent = dice + Number(currentScore0.textContent)
        }
    } else {
        if (dice === 1) {
            dicePic.setAttribute('src', 'images/dice-1.png')
            currentScore1.textContent = '0'
            player0.classList.add('player--active')
            player1.classList.remove('player--active')
            isPlayerActive = true
        } else if (dice === 2) {
            dicePic.setAttribute('src', 'images/dice-2.png')
            currentScore1.textContent = dice + Number(currentScore1.textContent)
        } else if (dice === 3) {
            dicePic.setAttribute('src', 'images/dice-3.png')
            currentScore1.textContent = dice + Number(currentScore1.textContent)
        } else if (dice === 4) {
            dicePic.setAttribute('src', 'images/dice-4.png')
            currentScore1.textContent = dice + Number(currentScore1.textContent)
        } else if (dice === 5) {
            dicePic.setAttribute('src', 'images/dice-5.png')
            currentScore1.textContent = dice + Number(currentScore1.textContent)
        } else if (dice === 6) {
            dicePic.setAttribute('src', 'images/dice-6.png')
            currentScore1.textContent = dice + Number(currentScore1.textContent)
        }
    }
})
buttonHold.addEventListener('click', function () {
    if (isPlayerActive === true) {
        score0.textContent = Number(currentScore0.textContent) + Number(score0.textContent)
        currentScore0.textContent = 0
        player0.classList.remove('player--active')
        player1.classList.add('player--active')
        isPlayerActive = false
    } else {
        score1.textContent = Number(currentScore1.textContent) + Number(score1.textContent)
        currentScore1.textContent = 0
        player0.classList.add('player--active')
        player1.classList.remove('player--active')
        isPlayerActive = true
    }
    if (score0.textContent >= 100) {
        playerName0.innerText += ' Wins 🎉'
        buttonHold.disabled = true
        buttonRoll.disabled = true
    } else if (score1.textContent >= 100) {
        playerName1.innerText += ' Wins 🎉'
        buttonHold.disabled = true
        buttonRoll.disabled = true
    }
})
buttonNewGame.addEventListener('click', function () {
    score0.textContent = 0;
    score1.textContent = 0;
    currentScore1.textContent = 0
    currentScore0.textContent = 0
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
    playerName0.innerText = 'Player 1'
    playerName1.innerText = 'Player 2'
    dicePic.setAttribute('src', 'images/dice-5.png')
    isPlayerActive = true
    buttonHold.disabled = false
    buttonRoll.disabled = false

})
