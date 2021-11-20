// variables to keep track of quiz state
var currQues = 0;
var currScore = 0;
var currTime = 30;

// variables to reference DOM elements
const questionBlock = document.getElementById('question-block');
const questionText = document.getElementById('question-txt');
const answerBlock = document.getElementById('answer-block');
const timer = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const scoreTable = document.getElementById('form-container')



// Starts Quiz
let letsGo = () => {
  //Hide start button and reveal question and answers
  startBtn.classList.add("hide");
  questionBlock.classList.remove("hide");
  answerBlock.classList.remove("hide")
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
      timer.setAttribute("style", "color: red") // Timer turns red with 10 seconds left
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
    button.classList.add("answer-btn");// Set 'answer-btn' class
    button.classList.add("id", `ans-${i}`); // Set new ID per iteration
    button.textContent = answer[0];// writes 0 index of each array in 'answers' array
    
    // Add dataset 'correct' to correct answer, array length of 2
    if (questions[currQues].answers[i].length === 2) {
      button.setAttribute('data-correct', 'correct')
    }
  })
  currQues++; // Next question object in questions array
};

// Checks if selected answer is correct or incorrect
let submitAns = (e) => {
  var correctAns = e.target.dataset.correct
  if (correctAns === "correct") {
    alert('CORRECT');
    currScore += 5; // Add 5 points on a correct answer
    nextQuest();
  } else {
    alert('incorrect');
    nextQuest();
    currTime -= 5; // Subtracts 5 seconds on a wrong answer
  }

};

// Changes quiz state to end page
let quizEnd = () => {
  currTime = 0
  timer.textContent = ''
  answerBlock.textContent = ''
  answerBlock.classList.add("hide");
  questionText.textContent = 'Your Score: ' + currScore;
  questionText.setAttribute('style', 'text-align: center')
  nextBtn.classList.remove("hide")
};

// Changes quiz state to form for initials
let toScores = () => {
  if (currScore < threeScore.value) {
    inputBox.classList.add('hide')
  }
  questionText.textContent = 'Your Score: ' + currScore;
  scoreTable.classList.remove('hide')
  nextBtn.classList.add('hide')
  submitBtn.classList.remove('hide')
  startBtn.classList.add('hide')
  writeScores();
};

startBtn.addEventListener('click', letsGo)
answerBlock.addEventListener('click', submitAns)
nextBtn.addEventListener('click', toScores);
submitBtn.addEventListener('click', submitScore)