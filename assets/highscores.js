const oneInit = document.getElementById('oneInit');
const oneScore = document.getElementById('oneScore');

const twoInit = document.getElementById('twoInit');
const twoScore = document.getElementById('twoScore');

const threeInit = document.getElementById('threeInit');
const threeScore = document.getElementById('threeScore');

var inputBox = document.getElementById('input');
const againBtn = document.getElementById('again-btn')

// Restarts quiz at index.html
let letsPlay = (e) => {
    e.preventDefault();
    location.href = './index.html'
}

// Retrieves stored scores, adds the new score, sorts them, then sets them into local storage
let submitScore = (e) => {

    var scores = JSON.parse(localStorage.getItem('scores'));
    var playerScore = [inputBox.value, currScore]
    if (scores === null) {
        localStorage.setItem("scores", JSON.stringify([playerScore]))
    } else {
        scores.push(playerScore);
        scores.sort(([a , b], [c, d]) => d - b);// Sorts scores highest to lowest
        localStorage.setItem("scores", JSON.stringify(scores))
        writeScores();
    }
    // Goes to score page
    e.preventDefault();
    location.href = './scores.html'
};

// Writes the top three scores to the leaderboard table
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