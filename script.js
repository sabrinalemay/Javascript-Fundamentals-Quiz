const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('choice-text'));

let currentQuestion = {}
let acceptingAnswers = true
let availableQuestions = []

let questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        choice1: "<js>",
        choice2: "<script>",
        choice3: "<scripting>",
        choice4: "<javascript>",
        answer: 2,
    },
    {
        question: "Where is the correct placement for Javascript?",
        choice1: "Inside the <body>",
        choice2: "Inside the <head>",
        choice3: "Both answers are correct",
        choice4: "Both answers are false",
        answer: 3
    },
    {
        question: "What is the correct way to add a pop up message that says 'Hello World'",
        choice1: "alert('Hello World')",
        choice2: "msg('Hello World')",
        choice3: "msgBox('Hello World')",
        choice4: "alertBox('Hello World')",
        answer: 1
    },
    {
        question: "How can you add a comment in Javascript?",
        choice1: "'This is a comment",
        choice2: "//This is a comment",
        choice3: "<!--This is a comment-->",
        choice4: "'This is a comment'",
        answer: 2
    }
]
const MAX_QUESTIONS = 4

startQuiz = () => {
    questionCounter = 0
    availableQuestions = [...questions]
    getNewQuestion()
}
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS)
    return window.location.assign('/end.html')
}
questionCounter = () => ++
progressText,innertext = 'question ${questionCounter} of ${MAX_QUESTIONS}'

const questionsIndex = Math.floor(Math.random()* availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion

choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' == number]
})
availableQuestions.splice(questionsIndex, 1)

acceptingAnswers = true

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return
        acceptingAnswers = false
        const selectedChoice = e.target
        const seletedAnswer = selectedChoice.dataset['number']
        let classToapply = seletedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
    })
})

startQuiz()
/*
var quiz = document.getElementById('quiz');
var results = document.getElementById('answer');
var submit = document.getElementById('submit');

function makeQuiz(){
    const output =[];
   questions.forEach(
       (currentQuestion, questionNumber) => {
           const answers = [];
           for
       }
   )
}
function showAnswer(){}

submit.addEventListener('click',showAnswer)*/