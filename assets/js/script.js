// !GIVEN I am taking a code quiz
// !WHEN I click the start button
// !THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
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

var questions = [
    {
        question: "how do you seperate string into an array?",
        answers: [".split", ".push", ".pop", ".splice"],
        correct: 0
    },
    {
        question: "what do you put after a method?",
        answers: ["{}", "()","[]", "<>"],
        correct: 1
    },
    {
        question: "how do you declare a variable?",
        answers: ["div", "prompt", "this", "let"],
        correct: 3
    },
    {
        question: "what is a boolean?",
        answers: ["true", "null", "string", "number"],
        correct: 0 
    },
    {
        question: "how do you leave a function?",
        answers: ["for", "exit", "return", "finished"],
        correct: 2
    }
]
    
function startTimer() {
    var secondsLeft = 60;
    var timer = document.getElementById("timer");
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.innerText = secondsLeft
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
}, 1000);}

function getQuestion() {
    console.log("you got here");
    var questionTitle = document.getElementById("questionTitle")
    questions[0]
    questionTitle.textContent = questions[0].question
    
}


function startGame() {

    document.getElementById("instructions").style.display = "none";

    document.getElementById("questions").style.display = "block";

    startTimer()
    getQuestion()

//     var questionDiv = document.getElementById('questions');

//     var questionHeader = document.createElement("h3")

//         questionHeader.textContent = questions[0].question

//     var button1 = document.createElement("button")
//         button1.innerText = questions[0].answers[0];

//     var button2 = document.createElement("button")
//         button2.innerText = questions[0].answers[1];

//     var button3 = document.createElement("button")
//         button3.innerText = questions[0].answers[2];

//     var button4 = document.createElement("button")
//         button4.innerText = questions[0].answers[3];
} 