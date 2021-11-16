// variables to keep track of quiz state

var currQues = 0

// variables to reference DOM elements
const questionBlock = document.getElementById('question-block');
const questionText = document.getElementById('question-txt');
const answerBlock = document.getElementById('answer-block');
const timer = document.getElementById('timer');


// var answerBtns = document.getElementsByClassName('answer-btn');
answerBlock.addEventListener('click', submitAns)


var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', letsGo)
const nextBtn = document.getElementById('next-btn')
nextBtn.addEventListener('click', nextQuest)

function letsGo() {
  startBtn.setAttribute("class", "hide");
  questionBlock.removeAttribute("class", "hide");
  answerBlock.removeAttribute("class", "hide")
  // nextBtn.removeAttribute("class", "hide")
  questionText.textContent = questions[currQues].text
  for (let i = 0; i < questions[currQues].answers.length; i++) {
    var button = document.createElement("button");
    answerBlock.appendChild(button);// appends button element per iteration
    button.setAttribute("class", "answer-btn");// Set 'answer-btn' class
    button.setAttribute("id", `ans-${i}`) // Set new ID per iteration
    button.textContent = questions[currQues].answers[i][0];// writes 0 index of each array in 'answers' array
    if (questions[currQues].answers[i].length === 2) {
      button.setAttribute('data-correct', 'correct')
    }
  };
  startClock();
}

function startClock() {
  var time = 30
  timer.textContent = "00:30"
  var countDown = setInterval(() => {
    time--;
    timer.textContent = time
  
    if (time === 0) {
      clearInterval(countDown)
    }
  }, 1000);
}

function nextQuest() {
  currQues++;
  answerBlock.textContent = ''
  questionText.textContent = ''
  questionText.textContent = questions[currQues].text

  for (let i = 0; i < questions[currQues].answers.length; i++) {
    var button = document.createElement("button");
    answerBlock.appendChild(button);// appends button element per iteration
    button.setAttribute("class", "answer-btn");// Set 'answer-btn' class
    button.setAttribute("id", `ans-${i}`) // Set new ID per iteration
    button.textContent = questions[currQues].answers[i][0];// writes 0 index of each array in 'answers' array
      if (questions[currQues].answers[i].length === 2) {
      button.setAttribute('data-correct', 'correct')
      }
  }
}

function submitAns(e) {
  if (e.target.dataset.correct === "correct") {
    alert('CORRECT');
    return nextQuest();
  } else {
    alert('incorrect')
    return nextQuest();
  }


  // var answer = e.target.textContent
  // for (let i = 0; i < questions[currQues].answers.length; i++) {
  //   var options = questions[currQues].answers[i];
  //   if (options[0] === answer && options.length === 2 )  {
  //     alert('nice');
  //     return nextQuest();
  //   } 
//     } else if (options[0] !== answer && options.length !== 2) {
//       alert('incorrecto')
//       return nextQuest();
//     }
}


// && questions[currQues].answers[i].length === 2)

//function to get the quiz going 

//function to pull each question
    //current question from questions
    //updated DOM elements to reflect the new question
    //clear old question choices
    //loop over answer choices (TIP: ForEach ;) ) 
    //create new button for each choice
    //event listener for each choice
    //display on the page

//function for the questionclick 
  //did the user guess right or wrong
  //wrong guess decreases time
  //display new time on the page
  //move to the next question
  //check if there are any questions left/you've run out

//function to end the quiz
  //stops timer
  //shows end screen
  //shows final score
  //hides questions section

 //function for the clock 
  //updates time
  //checks if user ran out of time 

//function to save the high score
  //get value of input box
  //make sure value isnt empty
  //get saved scores from localstorage, or if not any, set to empty array
  //format new score object for current user 
  //save to localstorage
  //redirect to next page




// user clicks button to submit initials


// user clicks button to start quiz
