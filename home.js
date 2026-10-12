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

const savedLearned = localStorage.getItem("learned");
let learned = Number(savedLearned) || 0;
const goal = 10;

function updatGoal() {
  const percent = Math.min((learned / goal) * 100, 100);
  console.log(percent);

  goalFill.style.width = `${percent}%`;
  goalCount.textContent = `${learned}/${goal}`;
}

addBtn.addEventListener("click", function () {
  learned++;

  localStorage.setItem("learned", learned);

  updatGoal();
});

updatGoal();
