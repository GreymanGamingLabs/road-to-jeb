let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];

// Shuffle questions
function shuffleQuestions() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}

// Start the game
function startGame() {
    currentQuestion = 0;
    score = 0;

    shuffleQuestions();
    showQuestion();
}

// Show question
function showQuestion() {
    const questionData = shuffledQuestions[currentQuestion];

    document.getElementById("question").innerText = questionData.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    questionData.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;

        button.onclick = () => checkAnswer(answer.correct);

        answersDiv.appendChild(button);
    });
}

// Check answer
function checkAnswer(correct) {
    if (correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < shuffledQuestions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

// End game
function endGame() {
    document.getElementById("question").innerText =
        `Game Over! Score: ${score}/${shuffledQuestions.length}`;

    document.getElementById("answers").innerHTML = "";
}
