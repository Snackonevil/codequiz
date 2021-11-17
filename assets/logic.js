// variables to keep track of quiz state
var currQues = 0
var currScore = 0
var currTime = 30

// variables to reference DOM elements
const questionBlock = document.getElementById('question-block');
const questionText = document.getElementById('question-txt');
const answerBlock = document.getElementById('answer-block');
const timer = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');

// var answerBtns = document.getElementsByClassName('answer-btn');



const nextBtn = document.getElementById('next-btn')
// nextBtn.addEventListener('click', nextQuest)

// Starts Quiz
let letsGo = () => {
  //Hide start button and reveal question and answers
  startBtn.setAttribute("class", "hide");
  questionBlock.removeAttribute("class", "hide");
  answerBlock.removeAttribute("class", "hide")
  // nextBtn.removeAttribute("class", "hide")
  questionText.textContent = questions[currQues].text// writes question text

  // writes following question
  nextQuest();

  // Begin timer
  startClock();
};

// Runs timer
let startClock = () => {
  timer.textContent = "Time left: 30"
  var countDown = setInterval(() => {
    currTime--;
    timer.textContent = 'Time left: ' + currTime;
  
    if (currTime === 0 || currTime < 0) {
      clearInterval(countDown);
      return quizEnd();
    } else if (currTime <= 10){
      timer.setAttribute("style", "color: red")
    }
  }, 1000);
};

// Goes to next question
let nextQuest = () => {

  // Calls quizEnd() if done with questions array
  if (questions[currQues] === undefined) {
    return quizEnd();
  }

  questionText.textContent = '' // Clears question text
  answerBlock.textContent = '' // Clears answer text
  questionText.textContent = questions[currQues].text // Writes question text

  //For loop to write possible answers
  questions[currQues].answers.forEach((answer, i) => {
    var button = document.createElement("button");
    answerBlock.appendChild(button);// appends button element per iteration
    button.setAttribute("class", "answer-btn");// Set 'answer-btn' class
    button.setAttribute("id", `ans-${i}`); // Set new ID per iteration
    button.textContent = answer[0];// writes 0 index of each array in 'answers' array
    
    // Add dataset 'correct' to correct answer, array length of 2
    if (questions[currQues].answers[i].length === 2) {
      button.setAttribute('data-correct', 'correct')
    }
  })
  currQues++; // Next question object
};

let submitAns = (e) => {
  if (e.target.dataset.correct === "correct") {
    alert('CORRECT');
    currScore += 5;
    nextQuest();
  } else {
    alert('incorrect');
    nextQuest();
    currTime -= 5;
  }
};

let quizEnd = () => {
  currTime = 0
  timer.textContent = ''
  answerBlock.textContent = ''
  answerBlock.setAttribute("class", "hide");
  questionText.textContent = 'Your Score: ' + currScore;
  nextBtn.removeAttribute("class", "hide")
};


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

startBtn.addEventListener('click', letsGo)
answerBlock.addEventListener('click', submitAns)
