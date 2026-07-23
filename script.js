const questions = [
    {
        question: "Which mob gives wool?",
        answer: "Sheep"
    },
    {
        question: "What block is used to make a furnace?",
        answer: "Cobblestone"
    },
    {
        question: "Which mob explodes when it gets close?",
        answer: "Creeper"
    },
    {
        question: "What food is used to breed sheep?",
        answer: "Wheat"
    },
    {
        question: "What dimension has Endermen and the Ender Dragon?",
        answer: "The End"
    },
    {
        question: "What ore gives diamonds?",
        answer: "Diamond Ore"
    },
    {
        question: "Which villager trades enchanted books?",
        answer: "Librarian"
    },
    {
        question: "What block lets you travel to the Nether?",
        answer: "Obsidian (used to build a Nether Portal)"
    }
];

let currentQuestion = null;

function startGame() {
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    nextQuestion();
}

function nextQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];

    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("answer").textContent = currentQuestion.answer;

    document.getElementById("answer-box").style.display = "none";
    document.getElementById("reveal-btn").style.display = "inline-block";
    document.getElementById("next-btn").style.display = "none";
}

function revealAnswer() {
    document.getElementById("answer-box").style.display = "block";
    document.getElementById("reveal-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "inline-block";
}
