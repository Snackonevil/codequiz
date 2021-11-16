// variables to keep track of quiz state



// variables to reference DOM elements
var questionBlock = document.getElementById('question-block');
var questionText = document.getElementById('question-txt');
var answerBlock = document.getElementById('answer-block');

var start = document.getElementById('start-btn');
start.addEventListener('click', letsGo)

function letsGo() {
  start.setAttribute("class", "hide");
  // startClock();
  nextQuest();
}

function nextQuest() {
  questionBlock.removeAttribute("class", "hide")
  console.log(questions[0].answers[0])
  questions[0].answers.forEach(() => {questions[0].answers[0]})
  // questions[0].answers.forEach(console.log('a'))
}
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
