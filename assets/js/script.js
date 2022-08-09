// !GIVEN I am taking a code quiz
// !WHEN I click the start button
// !THEN a timer starts and I am presented with a question
// !WHEN I answer a question
// !THEN I am presented with another question
// !WHEN I answer a question incorrectly
// !THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// Landing page
  // !I need a start button
  // !Description of app: welcome to my quiz, this is how it works sort of thing
  // !I need an event listener on start button -- listening for clicks
  // !When you click the start button, the landing page disappears and the first question & answers appears AND the timer appears and starts counting down
// !Need a timer that counts down
// !I need a set of questions -- array of objects
  // ? What do the questions need to include?
  // !Question text -- string
  // !Set of answers -- array of strings
  // !Some way to check whether the answer is correct -- give the string OR the index of the correct answer
    //  Some way to track whether the answer the user selected is the correct answer -- does NOT need to be with the other question info
// Need a way to display the question text, answers, and the answers need to be clickable
// When you click an answer
  // Compares the answer you chose to the correct answer
  // Displays some kind of feedback based on whether the selected answer is correct or incorrect
  // If the answer is incorrect, time is subtracted from the clock
  // Regardless whether the answer is correct or incorrect, the current question disappears and the next question appears UNLESS the user is on the final question
  // If the user is on the last question, once they select an answer, they're presented with a form to enter their initials
  // Initials and remaining time is saved to local storage as the score

// Game ends when all questions are answered OR the timer reaches 0 -- is there a case where the timer might go lower than 0 that needs to be accounted for?

var qIndex = 0;
var choices = document.querySelector('#choices')
var timerInterval; 
var secondsLeft = 60;
var timer = document.getElementById("timer");

var questions = [
    {
        question: "how do you separate string into an array?",
        answers: [".split", ".push", ".pop", ".splice"],
        correct: ".split"
    },
    {
        question: "what do you put after a method?",
        answers: ["{}", "()","[]", "<>"],
        correct: "()"
    },
    {
        question: "how do you declare a variable?",
        answers: ["div", "prompt", "this", "let"],
        correct: "let"
    },
    {
        question: "what is a boolean?",
        answers: ["true", "null", "string", "number"],
        correct:  "true"
    },
    {
        question: "how do you leave a function?",
        answers: ["for", "exit", "return", "finished"],
        correct: "return"
    }
]
    
function startTimer() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timer.innerText = secondsLeft
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
}, 1000);}

function getQuestion() {
    console.log("you got here");
    var questionTitle = document.getElementById("questionTitle")
    // questions[0]
    questionTitle.textContent = questions[qIndex].question
    choices.innerHTML = ''
    questions[qIndex].answers.forEach(function(answer){
        var liEl = document.createElement('li')
        liEl.textContent = answer
        liEl.addEventListener('click', checkAnswer)
        choices.append(liEl)
    })
}

function checkAnswer() {
    if (this.innerText === questions[qIndex].correct) {
        console.log('correct')
    } else{
        secondsLeft -= 10;
        if (secondsLeft< 0) {
            secondsLeft= 0
        }
        timer.innerText = secondsLeft
        console.log('wrong')
    }
    qIndex++;
    if (qIndex === questions.length) {
      endGame()  
    } else{
        getQuestion()
    }
}

function endGame() {
    document.getElementById('gameOver').style.display = 'block';

    document.getElementById('questions').style.display = 'none';
}


function startGame() {

    document.getElementById("instructions").style.display = "none";

    document.getElementById("questions").style.display = "block";

    startTimer()
    getQuestion()
} 