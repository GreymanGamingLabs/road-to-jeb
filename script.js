// 1. Fisher-Yates shuffle algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Wait until the HTML page has completely loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Shuffle the questions array
  if (typeof questions !== 'undefined') {
    shuffle(questions);
  }

  let currentIndex = 0;

  // Select DOM Elements
  const card = document.getElementById('card');
  const questionText = document.getElementById('question');
  const answerText = document.getElementById('answer');
  const nextBtn = document.getElementById('next');

  // Display current card safely
  function displayCard() {
    if (!questions || questions.length === 0) return;

    // Reset card flip state safely
    if (card) {
      card.classList.remove('is-flipped');
    }
    
    if (questionText) {
      questionText.textContent = questions[currentIndex].question;
    }
    
    if (answerText) {
      answerText.textContent = questions[currentIndex].answer;
    }
  }

  // Flip card on click
  if (card) {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  }

  // Next Button Navigation
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % questions.length;
      displayCard();
    });
  }

  // Initialize first card
  displayCard();
});
