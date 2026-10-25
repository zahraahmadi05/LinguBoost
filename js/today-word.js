const userNameEl = document.getElementById("user-name");
const doneBtnEl = document.getElementById("done-word-btn");
const wordEl = document.getElementById("word");
const wordTypeEl = document.getElementById("word-type");
const wordMeaningEl = document.getElementById("word-meaning");
const wordExampleEl = document.getElementById("word-example");

const userNameProf = localStorage.getItem("userName");
if (userNameProf === null) {
  window.location.href = "welcome.html";
} else {
  userNameEl.textContent = userNameProf;
}

doneBtnEl.addEventListener("click", function () {
  const today = new Date().toDateString();
  localStorage.setItem("wordDoneDate", today);
  window.location.replace("home.html");
});

const START_DATE = new Date(2026, 9, 25);
const DAY_MS = 24 * 60 * 60 * 1000;

function getWordIndex(date) {
  const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diff = day - START_DATE;
  const days = Math.round(diff / DAY_MS);
  return ((days % words.length) + words.length) % words.length;
}

const todayWord = words[getWordIndex(new Date())];

function showWord(item) {
  wordEl.textContent = item.word;
  wordTypeEl.textContent = item.type;
  wordMeaningEl.textContent = item.meaning;
  wordExampleEl.textContent = item.example;
}
showWord(todayWord);
