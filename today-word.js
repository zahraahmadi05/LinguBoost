const userName = document.getElementById("user-name");
const wordType = document.getElementById("word-type");
const doneBtn = document.getElementById("done-word-btn");

doneBtn.addEventListener("click", function () {
  const today = new Date().toDateString();
  localStorage.setItem("wordDoneBtn", today);
  window.location.href = "home.html";
});

