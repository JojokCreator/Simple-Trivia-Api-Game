//--------------PLAN----------------------
//Create link to Api - https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean
// create webpage - style a bit
    // Create HTML skeleton - DONE
    // Get username, display on webpage - DONE
    //bring in 5 questions - Title & start now box w/instructions & button - DONE
    // get rid of &quot thing
    // loop through 5 questions with true false buttons (one at time) -DONE
    // at the end display score - DONE
    // do you want to play again.
    // style webpage using CSS - DONE
//--------------PLAN----------------------

//function pulls questions from API and tracks correct answer
let userAnswer = ""
let score = 0

async function getQuestion() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean");
    const data = await response.json();
    playGame(" ",data);
    
    //connects true/false buttons to question
    document.querySelector ("#true-button").addEventListener ("click", function () { playGame('True', data) });
    document.querySelector ("#false-button").addEventListener ("click", function () { playGame('False', data) });
}

getQuestion (); //initial setup!

function playGame(userAnswer,data) {
    let i = Math.floor(Math.random() * 10);
    let correctAnswer = data.results[i].correct_answer
    console.log(correctAnswer)
    if (userAnswer === correctAnswer) {
        score = score + 1;
        console.log(score)
        document.querySelector("#scorecard").innerText = "Your Score is " + score + "!"
    }
    let question = data.results[i].question;
    question = question.replace(/&quot;/g, '"');
    document.querySelector("#question").innerText = question
}

//collects and displays name
document.querySelector("#name-submit-button").addEventListener("click", nameChange);

function nameChange () {
    document.querySelector("#welcome-name").innerText = "Welcome " + document.querySelector("#name-input").value + "!"; //NameStuff
}













