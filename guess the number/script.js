"use strict";
let body = document.querySelector("body");
let displaynumber = document.querySelector(".number");
let message = document.querySelector(".message");
let gamescore = document.querySelector(".score");
const check = document.querySelector(".btn__check");
const again = document.querySelector(".btn__again");
let score = 20;
let highscore = 0;
// secret number
let secretnumber = Math.trunc(Math.random() * 20) + 1;

// display message
const displaymessage = (messages) => {
  message.textContent = messages;
};
function guesscheck() {
  const guess = Number(document.querySelector(".number__guess").value);

  // when there is no input
  if (!guess) {
    displaymessage("🚫 Guess a Number! ");
  }

  //   when player wins
  else if (guess === secretnumber) {
    displaymessage("🎉Correct Answer ");
    displaynumber.textContent = secretnumber;
    body.style.backgroundColor = "#60b347";

    displaynumber.style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //    when guess is not equal
  else if (guess !== secretnumber) {
    if (score > 1) {
      displaymessage(guess > secretnumber ? "📈Too High!" : "📉 Too Low!");
      score--;
      gamescore.textContent = score;
    } else {
      displaymessage("💥 You lost the game!");
      gamescore.textContent = "0";
    }
  }
}

// click on check
check.addEventListener("click", guesscheck);

// check on enter key pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && "guess") {
    guesscheck();
  }
});

// click again
const clickagain = () => {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  displaymessage("Start Guessing...");
  gamescore.textContent = score;
  document.querySelector(".number__guess").value = "";
  displaynumber.textContent = "?";
  body.style.backgroundColor = "#222";

  displaynumber.style.width = "15rem";
};

again.addEventListener("click", clickagain);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") clickagain();
});
