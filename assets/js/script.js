let timeEl = document.querySelector("p.time");
let secondsLeft = 120;
let scoreEl = document.querySelector("#score");

const introEl = document.querySelector(".container");

const questionsEl = document.querySelector(".quiz-container");

let questionEl = document.querySelector("#question");

let questionCount = 0;

const correctWrongEl = document.querySelector("#correct-wrong");

const finalEl = document.querySelector("#final");

let initialsInput = document.querySelector("#initials");

const highscoresEl = document.querySelector("#highscores");

let scoreListEl = document.querySelector("#score-list");
let scoreList = [];

const startBtn = document.querySelector("#start-btn");

const ansBtn = document.querySelectorAll(".choice-text")

const ans1Btn = document.querySelector("#answer1");
const ans2Btn = document.querySelector("#answer2");
const ans3Btn = document.querySelector("#answer3");
const ans4Btn = document.querySelector("#answer4");

const submitScrBtn = document.querySelector("#submit-score");
const goBackBtn = document.querySelector("#goback");
const clearScrBtn = document.querySelector("#clearscores");
const viewScrBtn = document.querySelector("#view-scores");

