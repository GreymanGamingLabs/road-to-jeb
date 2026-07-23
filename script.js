let currentIndex = 0;
let isShuffled = false;

// Function to shuffle questions safely
function shuffleQuestions() {
  if (typeof questions !== 'undefined' && Array.isArray(questions)) {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    isShuffled = true;
  }
}

const card = document.getElementById('card');
const questionText = document.getElementById('question');
const answerText = document.getElementById('answer');
const nextBtn = document.getElementById('next');

function displayCard() {
  // Shuffle once on the very first card display
  if (!isShuffled) {
    shuffleQuestions();
  }

  if (!questions || questions.length === 0) return;

  // Reset card state
  if (card) {
    card.classList.remove('is-flipped');
  }
  
  // Set content
  if (questionText) {
    questionText.textContent = questions[currentIndex].question;
  }
  if (answerText) {
    answerText.textContent = questions[currentIndex].answer;
  }
}

// Flip card event
if (card) {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
}

// Next button event
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % questions.length;
    displayCard();
  });
}

// Start app
displayCard();
