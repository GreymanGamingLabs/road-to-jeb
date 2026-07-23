let remainingQuestions = [];

function shuffleQuestions() {
    remainingQuestions = [...questions];

    for (let i = remainingQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingQuestions[i], remainingQuestions[j]] = [remainingQuestions[j], remainingQuestions[i]];
    }
}

function startGame() {

    document.getElementById("home-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";

    shuffleQuestions();

    nextQuestion();
}

function nextQuestion() {

    if (remainingQuestions.length === 0) {

        shuffleQuestions();

    }

    currentQuestion = remainingQuestions.pop();

    document.getElementById("question").innerText = currentQuestion.question;

    document.getElementById("answer").innerText = currentQuestion.answer;

    document.getElementById("answer-box").style.display = "none";

    document.getElementById("reveal-btn").style.display = "inline-block";

    document.getElementById("next-btn").style.display = "none";

}

function revealAnswer() {

    document.getElementById("answer-box").style.display = "block";

    document.getElementById("reveal-btn").style.display = "none";

    document.getElementById("next-btn").style.display = "inline-block";

}
