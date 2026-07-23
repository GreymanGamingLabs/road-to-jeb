let currentQuestionIndex = 0;
let isShowingAnswer = false;

const quizCard = document.getElementById('quizCard');
const cardBadge = document.getElementById('cardBadge');
const cardContent = document.getElementById('cardContent');
const cardHint = document.getElementById('cardHint');
const nextBtn = document.getElementById('nextBtn');

function displayCard() {
  const currentData = questions[currentQuestionIndex];
  
  if (!isShowingAnswer) {
    quizCard.classList.remove('answer-mode');
    cardBadge.textContent = `Question ${currentQuestionIndex + 1}`;
    cardContent.textContent = currentData.question;
    cardHint.textContent = "Click anywhere on the card to reveal answer";
  } else {
    quizCard.classList.add('answer-mode');
    cardBadge.textContent = "Answer";
    cardContent.textContent = currentData.answer;
    cardHint.textContent = "Click 'Next Question' to continue";
  }
}

function toggleAnswer() {
  isShowingAnswer = !isShowingAnswer;
  displayCard();
}

function nextQuestion() {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  isShowingAnswer = false;
  displayCard();
}

// Click events
quizCard.addEventListener('click', toggleAnswer);

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents triggering the card click event
  nextQuestion();
});

// Display initial question on load
displayCard();
