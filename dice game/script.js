"use strict";
// selecting element
const player0El = document.querySelector(".player__0");
const player1El = document.querySelector(".player__1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn__new");
const btnRoll = document.querySelector(".btn__roll");
const btnHold = document.querySelector(".btn__hold");

let scores, currentScore, activePlayer, playing;
// starting conditions

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.add("player__active");
  player1El.classList.remove("player__active");
  player0El.classList.remove("player__winner");
  player1El.classList.remove("player__winner");

  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";
};
init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player__active");
  player1El.classList.toggle("player__active");
};

const roll = () => {
  if (playing) {
    // 1.genrating dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2.display dice roll
    diceEl.classList.remove("hidden");
    diceEl.src = `/images/dice-${dice}.png`;

    // 3.Check for dice rolled is 1
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
};

const hold = () => {
  if (playing) {
    // 1.add current score to active player
    scores[activePlayer] += currentScore;
    // scores[1]+=currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2.check if player score is >=100
    if (scores[activePlayer] >= 100) {
      // 3.finish the game
      playing = false;
      diceEl.classList.add("hidden");
      const playeractive = document.querySelector(`.player__${activePlayer}`);
      document.getElementById(`name--${activePlayer}`).textContent = "Winner";
      playeractive.classList.add("player__winner");
      playeractive.classList.remove("player__active");
    } else {
      // switch to next player
      switchPlayer();
    }
  }
};

// roll dice function
btnRoll.addEventListener("click", roll);

btnHold.addEventListener("click", hold);

btnNew.addEventListener("click", init);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") init();
});
