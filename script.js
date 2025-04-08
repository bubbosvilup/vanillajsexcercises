const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const counter = document.getElementById("counterText");
const decreaseBtn = document.getElementById("decrease");
const celebrationSound = new Audio(
  "https://www.soundjay.com/human/sounds/applause-8.mp3"
);
const progressBar = document.getElementById("progressBar");

let count = 0;
celebrationSound.volume = 0.2;

//functions
function updateProgressBar() {
  const percentage = (count + 10) * 5;
  progressBar.style.width = `${percentage}%`;
}

function disabledButtons() {
  increaseBtn.disabled = true;
  decreaseBtn.disabled = true;
  increaseBtn.classList.add("bg-gray-400", "cursor-not-allowed");
  decreaseBtn.classList.add("bg-gray-400", "cursor-not-allowed");
}

function resetButtons() {
  count = 0;
  updateProgressBar();
  increaseBtn.classList.remove("bg-gray-400", "cursor-not-allowed");
  decreaseBtn.classList.remove("bg-gray-400", "cursor-not-allowed");
  increaseBtn.disabled = false;
  decreaseBtn.disabled = false;
  counter.innerHTML = 0;
}

//buttons
increaseBtn.addEventListener("click", () => {
  count++;
  updateProgressBar();

  if (count === 10) {
    counter.innerHTML = "Congratulations!";
    celebrationSound.play();
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
    disabledButtons();
  } else {
    counter.innerHTML = count;
  }
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateProgressBar();

  if (count === -10) {
    counter.innerHTML = "!snoitalutargnoC";
    celebrationSound.play();
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
    disabledButtons();
  } else {
    counter.innerHTML = count;
  }
});

//reset buttun
resetBtn.addEventListener("click", () => {
  resetButtons();
});
