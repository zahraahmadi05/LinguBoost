const userNameEl = document.getElementById("user-name");

const savedName = localStorage.getItem("userName");

if (savedName === null) {
  window.location.href = "welcome.html";
} else {
  userNameEl.textContent = savedName;
}

const goalFill = document.getElementById("goal-fill");
const goalCount = document.getElementById("goal-count");
const addBtn = document.getElementById("add-btn");

const goalProgress = document.getElementById("goal-progress");
const goalDone = document.getElementById("goal-done");

const today = new Date().toDateString();
const savedDate = localStorage.getItem("learnedDate");

if (savedDate !== today) {
  localStorage.setItem("learned", 0);
  localStorage.setItem("learnedDate", today);
}

const messageEl = document.getElementById("message");
const partyPaper = document.getElementById("party-popper");
const dailyBtn = document.getElementById("daily-btn");

const wordDoneDate = localStorage.getItem("wordDoneDate");

if (wordDoneDate === today) {
  messageEl.textContent = "You got today's word.";
  partyPaper.classList.remove("hidden");
  dailyBtn.removeAttribute("href");
  dailyBtn.classList.add("opacity-50", "cursor-not-allowed");
}

const savedLearned = localStorage.getItem("learned");
let learned = Number(savedLearned) || 0;
const goal = 10;

function updateGoal() {
  const percent = Math.min((learned / goal) * 100, 100);

  goalFill.style.width = `${percent}%`;
  goalCount.textContent = `${learned}/${goal}`;

  if (learned >= goal) {
    goalProgress.classList.add("hidden");
    goalDone.classList.remove("hidden");
  } else {
    goalProgress.classList.remove("hidden");
    goalDone.classList.add("hidden");
  }
}

addBtn.addEventListener("click", function () {
  learned++;

  localStorage.setItem("learned", learned);

  updateGoal();
});

updateGoal();
