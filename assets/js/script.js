const question = document.querySelector("#question");
const choices = Array.from(document.querySelector(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


