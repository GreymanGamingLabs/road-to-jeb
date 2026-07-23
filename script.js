// Fisher-Yates Shuffle Algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let currentIndex = 0;

function displayCard() {
  const card = document.getElementById('card');
  const questionText = document.getElementById('question');
  const answerText = document.getElementById('answer');

  // Safety check: ensure questions array exists and has content
  if (typeof questions === 'undefined' || !Array.isArray(questions) || questions.length === 0) {
    if (questionText) questionText.textContent = "Error: Could not load questions.js";
    return;
  }

  // Reset flip state when loading a new card
  if (card) card.classList.remove('is-flipped');

  // Update card content
  if (questionText) questionText.textContent = questions[currentIndex].question;
  if (answerText) answerText.textContent = questions[currentIndex].answer;
}

// Initialize application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('card');
  const nextBtn = document.getElementById('next');

  // Shuffle questions array once on page load
  if (typeof questions !== 'undefined' && Array.isArray(questions)) {
    shuffle(questions);
  }

  // Card Flip Toggle
  if (card) {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  }

  // Next Question Button
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (typeof questions !== 'undefined' && questions.length > 0) {
        currentIndex = (currentIndex + 1) % questions.length;
        displayCard();
      }
    });
  }

  // Load the initial card
  displayCard();
});
