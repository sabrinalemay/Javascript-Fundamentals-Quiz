const questionContainer = document.getElementsByClassName('.container');
const questionElement = document.getElementById('question');
var startBtn = document.getElementById('start-btn');
var answerBtnElement = document.getElementById('choice-container');

let currentQuestionIndex = 0;

startBtn.addEventListener('click', startQuiz);

var choicesEl = document.getElementById('choice-container');

function startQuiz() {
    showQuestion();
}


function showQuestion() {
    var currentQuestion = questions [currentQuestionIndex];

questionElement.textContent=currentQuestion.question;

answerBtnElement.innerHTML="";

currentQuestion.choices.forEach(function(choice){
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent=choice;

    choiceNode.onclick = questionClick;
    choicesEl.appendChild(choiceNode);
});


}
function questionClick(){
    if(this.value !== questions[currentQuestionIndex].answer){
        alert("wrong");
    }else {
        alert("correct");
    }
    currentQuestionIndex++;
    if(currentQuestionIndex===questions.length){
        quizEnd();
    }else {
        showQuestion();
    }
}

function quizEnd(){
    alert("Quiz is over");
}

const questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        choices: ["<js>", "<script>", "<scripting>", "<javascript>"],
        answer: "<script>",
    },
    {
        question: "Where is the correct placement for Javascript?",
        choices: ["Inside the <body>", "Inside the <head>", "Both answers are correct", "Both answers are false"],
        answer: "Both answers are correct",
    },
    {
        question: "What is the correct way to add a pop up message that says 'Hello World'",
        choices: ["alert('Hello World')", "msg('Hello World')", "msgBox('Hello World')", "alertBox('Hello World')"],
        answer: "alert('Hello World')",
    },
    {
        question: "How can you add a comment in Javascript?",
        choices: ["'This is a comment", "'This is a comment'", "<!--This is a comment-->", "//This is a comment"],
        answer: "//This is a comment",
    }
]