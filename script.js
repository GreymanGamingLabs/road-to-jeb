// 1. Shuffle algorithm to randomize the array order
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
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// 3. Display current card
function displayCard() {
  // Reset card state (make sure it's not flipped over when changing cards)
  card.classList.remove('is-flipped');
  
  // Set question and answer content
  questionText.textContent = questions[currentIndex].question;
  answerText.textContent = questions[currentIndex].answer;
}

// 4. Flip card on click
card.addEventListener('click', () => {
  card.classList.toggle('is-flipped');
});

// 5. Button Navigation
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayCard();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    displayCard();
  }
});

// 6. Initialize first card
displayCard();
