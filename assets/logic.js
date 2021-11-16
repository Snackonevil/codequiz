// variables to keep track of quiz state



// variables to reference DOM elements
var questionBlock = document.getElementById('question-block');
var questionText = document.getElementById('question-txt');
var answerBlock = document.getElementById('answer-block');




var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', letsGo)

const nextBtn = document.getElementById('next-btn')

function letsGo() {
  startBtn.setAttribute("class", "hide");
  questionBlock.removeAttribute("class", "hide");
  answerBlock.removeAttribute("class", "hide")
  // startClock();
  nextQuest();
}

function nextQuest() {
  answerBlock.innerHTML = ''
  questionText.textContent = questions[0].text

  for (let i = 0; i < questions[0].answers.length; i++) {
    var button = document.createElement("button");
    answerBlock.appendChild(button);// appends button element per iteration
    button.setAttribute("class", "answer-btn");// Set 'answer-btn' class
    button.setAttribute("id", `ans-${i}`) // Set new ID per iteration
    button.textContent = questions[0].answers[i][0];// writes 0 index of each array in 'answers' array
  }

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
