const userName = document.getElementById("user-name");
const wordType = document.getElementById("word-type");
const doneBtn = document.getElementById("done-word-btn");

const userNameProf = localStorage.getItem("userName");
if (userNameProf === null) {
  window.location.href = "welcome.html";
} else {
  userName.textContent = userNameProf;
}

doneBtn.addEventListener("click", function () {
  const today = new Date().toDateString();
  localStorage.setItem("wordDoneDate", today);
  window.location.replace = "home.html";
});

const START_DATE = new Date(2026, 9, 1);
const DAY_MS = 24 * 60 * 60 * 1000;

function getWordIndex(date) {
  const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diff = day - START_DATE;
  const days = Math.round(diff / DAY_MS);
  return ((days % words.length) + words.length) % words.length;
}

