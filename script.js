// Game Data: Questions, Answers, and Corresponding Messages
const gameData = [
      {
        question: "Q1",
        answers: [
            { text: "A1", message: "R1" },
            { text: "A2", message: "R2" },
            { text: "A3", message: "R3" }
        ]
    },
      {
        question: "Q2",
        answers: [
            { text: "A1", message: "R1" },
            { text: "A2", message: "R2" },
            { text: "A3", message: "R3" }
        ]
    },
      {
        question: "Q3",
        answers: [
            { text: "A1", message: "R1" },
            { text: "A2", message: "R2" },
            { text: "A3", message: "R3" }
        ]
    },
      {
        question: "Q4",
        answers: [
            { text: "A1", message: "R1" },
            { text: "A2", message: "R2" },
            { text: "A3", message: "R3" }
        ]
    },
      {
        question: "Q5",
        answers: [
            { text: "A1", message: "R1" },
            { text: "A2", message: "R2" },
            { text: "A3", message: "R3" }
        ]
    },
      {
        question: "Q6",
        answers: [
            { text: "A1", message: "R1" },
            { text: "A2", message: "R2" },
            { text: "A3", message: "R3" }
        ]
    },
      {
        question: "Q7",
        answers: [
            { text: "A1", message: "R1" },
            { text: "A2", message: "R2" },
            { text: "A3", message: "R3" }
        ]
    },
      {
        question: "Q8",
        answers: [
            { text: "A1", message: "R1" },
            { text: "A2", message: "R2" },
            { text: "A3", message: "R3" }
        ]
    },
      {
        question: "Q9",
        answers: [
            { text: "A1", message: "R1" },
            { text: "A2", message: "R2" },
            { text: "A3", message: "R3" }
        ]
    },
]

// DOM Elements
const questionElement = document.querySelector('.question');
const buttons = document.querySelectorAll('.button');
const nextFrame = document.querySelector('.next-frame');
const answer1Element = document.querySelector('.anwser-1');
const answer2Element = document.querySelector('.anwser-2');
const answer3Element = document.querySelector('.anwser-3');

// Game State
let currentQuestionIndex = 0;
let selectedAnswerIndex = null;

// Initialize Game
function initGame() {
    loadQuestion(currentQuestionIndex);
    setupEventListeners();
}

// Load Question
function loadQuestion(index) {
    questionElement.textContent = gameData[index].question;
    
    answer1Element.textContent = gameData[index].answers[0].text;
    answer2Element.textContent = gameData[index].answers[1].text;
    answer3Element.textContent = gameData[index].answers[2].text;
    
    buttons.forEach(button => {
        button.classList.remove('selected');
        button.style.pointerEvents = 'auto';
    });

    selectedAnswerIndex = null;
}

// Setup Event Listeners
function setupEventListeners() {
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => selectAnswer(index));
    });

    nextFrame.addEventListener('click', () => {
        if (selectedAnswerIndex === null) {
            questionElement.textContent = "Please select an answer first!";
            setTimeout(() => {
                questionElement.textContent = gameData[currentQuestionIndex].question;
            }, 1000);
        } else {
            moveToNextQuestion();
        }
    });
}
