var choices = Array.from(document.querySelectorAll('choice-text'));
const questionContainer = document.getElementsByClassName('.container');
const questionElement = document.getElementById('#question');

let currentQuestion

function startQuiz() {
    getNewQuestion()
    currentQuestion = 0
}

function showQuestion(question) {
    questionElement.innerText = question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', showAnswer)
        answerButtonElement.appendChild(button)
    })
}

function selectNextQuestion() {
    showCurrentQuestion(currentQuestion)
}

function showAnswer() {
    const selectedButton = e.target
    const correctAnswer = selectedButton.dataset.correct
}

const questions = [
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
//Deleted a bunch of code, trying to start over because I'm not sure why it isn't working, planning on resubmitting once I figure it out and have help from my tutor