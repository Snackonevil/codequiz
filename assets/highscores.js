
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');

var inputBox = document.getElementById('input');
const againBtn = document.getElementById('again-btn')




var arrayy = [['sdf', 5], ['ggg', 10]]



let letsPlay = (e) => {
    e.preventDefault();
    location.href = './index.html'
}

let submitScore = () => {
    var playerScore = [inputBox.value, currScore]

    arrayy.push(playerScore);
    arrayy.sort(([a , b], [c, d]) => d - b);


    console.log(arrayy)
    
}

let writeScores = () => {
    
    // var oneScore = document.createElement('td')
    // var oneInit = document.createElement('td')
    // first.insertAdjacentElement('afterend', oneScore)
    // first.insertAdjacentElement('afterend', oneInit)
    // oneInit.textContent = 
    // oneScore.textContent = 
    // var twoScore = document.createElement('td')
    // var twoInit = document.createElement('td')
    // second.insertAdjacentElement('afterend', twoScore)
    // second.insertAdjacentElement('afterend', twoInit)
    // twoInit.textContent = 'hello'
    // twoScore.textContent = 'there'
    // var threeScore = document.createElement('td')
    // var threeInit = document.createElement('td')
    // third.insertAdjacentElement('afterend', threeScore)
    // third.insertAdjacentElement('afterend', threeInit)
    // threeInit.textContent = 'hello'
    // threeScore.textContent = 'there'
    // console.log(inputBox.value);
  
    // location.href = './scores.html'
}

againBtn.addEventListener('click', letsPlay)