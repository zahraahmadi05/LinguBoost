const profileNameEl = document.getElementById("profile-name");
const joinDateEl = document.getElementById("join-date");
const nameProfileEl = document.getElementById("name-value");

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
