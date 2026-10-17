const profileNameEl = document.getElementById("profile-name");
const joinDateEl = document.getElementById("join-date");
const nameProfileEl = document.getElementById("name-value");
const editNameEl = document.getElementById("edit-name");
const nameSheetEl = document.getElementById("name-sheet");
const nameFormEl = document.getElementById("name-form");
const closeSheetEl = document.getElementById("close-sheet");
const nameInputEl = document.getElementById("name-input");

const userProfName = localStorage.getItem("userName");
if (userProfName === null) {
  window.location.href = "welcome.html";
} else {
  nameProfileEl.textContent = userProfName;
  profileNameEl.textContent = userProfName;
}

const savedJoinDate = localStorage.getItem("joinDate");
if (savedJoinDate === null) {
  joinDateEl.textContent = "Unknown";
} else {
  const date = new Date(savedJoinDate);
  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  joinDateEl.textContent = formatted;
}

editNameEl.addEventListener("click", function () {
  nameSheetEl.classList.remove("hidden");
});
