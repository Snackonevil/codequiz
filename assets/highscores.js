
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');

const oneInit = document.getElementById('oneInit');
const oneScore = document.getElementById('oneScore');

const twoInit = document.getElementById('twoInit');
const twoScore = document.getElementById('twoScore');

const threeInit = document.getElementById('threeInit');
const threeScore = document.getElementById('threeScore');

var inputBox = document.getElementById('input');
const againBtn = document.getElementById('again-btn')


let letsPlay = (e) => {
    e.preventDefault();
    location.href = './index.html'
}

let submitScore = (e) => {

    var scores = JSON.parse(localStorage.getItem('scores'));
    var playerScore = [inputBox.value, currScore]
    if (scores === null) {
        localStorage.setItem("scores", JSON.stringify([playerScore]))
    } else {
        scores.push(playerScore);
        scores.sort(([a , b], [c, d]) => d - b);
        localStorage.setItem("scores", JSON.stringify(scores))
        writeScores();
    }
    e.preventDefault();
    location.href = './scores.html'
};

let writeScores = () => {
    var scores = JSON.parse(localStorage.getItem('scores'));

    if (scores.length >= 0) {
    oneInit.textContent = scores[0][0]
    oneScore.textContent = scores[0][1]
    }
    
    if (scores.length >= 1) {
    twoInit.textContent = scores[1][0]
    twoScore.textContent = scores[1][1]
    }

    if (scores.length >= 2) {
    threeInit.textContent = scores[2][0]
    threeScore.textContent = scores[2][1]
    }
};

againBtn.addEventListener('click', letsPlay)