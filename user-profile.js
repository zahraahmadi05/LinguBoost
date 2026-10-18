const profileNameEl = document.getElementById("profile-name");
const joinDateEl = document.getElementById("join-date");
const nameProfileEl = document.getElementById("name-value");
const editNameEl = document.getElementById("edit-name");
const nameSheetEl = document.getElementById("name-sheet");
const nameFormEl = document.getElementById("name-form");
const closeBtn = document.getElementById("close-sheet");
const nameInputEl = document.getElementById("name-input");

const userProfName = localStorage.getItem("userName");
if (userProfName === null) {
  window.location.href = "welcome.html";
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

  nameInputEl.value = localStorage.getItem("userName");
  nameInputEl.focus();
});

function closeSheet() {
  nameSheetEl.classList.add("hidden");
}

closeBtn.addEventListener("click", function () {
  closeSheet();
});

nameSheetEl.addEventListener("click", function (e) {
  if (e.target === nameSheetEl) {
    closeSheet();
  }
});

function showName(name) {
  nameProfileEl.textContent = name;
  profileNameEl.textContent = name;
}
showName(userProfName);

nameFormEl.addEventListener("click", function (e) {
  e.preventDefault();

  const inputValue = nameInputEl.value.trim();
  if (inputValue === "") {
    alert("Please enter name");
    return;
  }

  localStorage.setItem("userName", inputValue);
  showName(inputValue);

  closeSheet();
});

const levelCards = document.querySelectorAll("[data-level]");

const ringColors = {
  beginner: "ring-[#11700c]",
  intermediate: "ring-[#1b0a5e]",
  advanced: "ring-[#590571]",
};

function showLevel() {
  const savedLevel = localStorage.getItem("level");

  levelCards.forEach(function (card) {
    const isSelected = card.dataset.level === savedLevel;
    const checkEl = card.querySelector("[data-check]");
    card.classList.toggle("ring-2", isSelected);
    card.classList.toggle(ringColors[card.dataset.level], isSelected);
    checkEl.classList.toggle("hidden", !isSelected);
  });
}

levelCards.forEach(function (card) {
  card.addEventListener("click", function () {
    localStorage.setItem("level", card.dataset.level);
    showLevel();
  });
});

showLevel();
