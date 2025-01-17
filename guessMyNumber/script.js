const refreshBtn = document.querySelector(".again");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highScore");
const checkBtn = document.querySelector(".check");
const ranNumber = Math.round(Math.random() * 20 + 1);
const guess = document.querySelector(".guess");

const guessNumber = () => {
  const guessValue = Number(guess.value);
  
  if (guessValue === 0) {
    alert("Enter value in the input!!!");
  } else {
    if (Number(score.textContent) === 0) {
      message.textContent = "Game Over 😔😔😔";
    } else {
      if (guessValue === ranNumber) {
        number.textContent = guessValue;
        message.textContent = "Winner 🏆🏆🏆";
      } else if (guessValue > ranNumber) {
        message.textContent = "Too High";
        score.textContent = Number(score.textContent) - 1;
      } else if (guessValue < ranNumber) {
        message.textContent = "Too Low";
        score.textContent = Number(score.textContent) - 1;
      }
    }

    // score.textContent = Number(score.textContent) guess
  }
};

checkBtn.addEventListener("click", guessNumber);

refreshBtn.addEventListener("click", () => {
  number.textContent = "?";
  score.textContent = "20";
  guess.value = "";
  message.textContent = "Start guessing...";
});
