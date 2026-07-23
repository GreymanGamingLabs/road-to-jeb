// 1. Fisher-Yates shuffle algorithm to randomize questions
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 2. Shuffle questions as soon as the file loads
shuffle(questions);

let currentIndex = 0;
const card = document.getElementById('card');
const questionText = document.getElementById('question');
const answerText = document.getElementById('answer');
const nextBtn = document.getElementById('next');

// 3. Display current card
function displayCard() {
  if (!questions || questions.length === 0) return;

  // Reset card flip state
  card.classList.remove('is-flipped');
  
  // Set question and answer text
  questionText.textContent = questions[currentIndex].question;
  answerText.textContent = questions[currentIndex].answer;
}

// 4. Flip card on click
if (card) {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
}

// 5. Next Button Navigation
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % questions.length; // Loop back to start when reaching the end
    displayCard();
  });
}

// 6. Initialize first card
displayCard();
