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
