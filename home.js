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

const massage = document.getElementById("massage");
const donePaper = document.getElementById("done-paper");

const wordDoneDate = localStorage.getItem("wordDoneDate");

if (wordDoneDate === today) {
  massage.textContent = "You got today's word";
  donePaper.classList.remove("hidden");
}

const today = new Date().toDateString();
const savedDate = localStorage.getItem("learnedDate");

if (savedDate !== today) {
  localStorage.setItem("learned", 0);
  localStorage.setItem("learnedDate", today);
}

const savedLearned = localStorage.getItem("learned");
let learned = Number(savedLearned) || 0;
const goal = 10;

function updateGoal() {
  const percent = Math.min((learned / goal) * 100, 100);
  console.log(percent);

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
