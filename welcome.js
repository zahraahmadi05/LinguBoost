const backBtn = document.getElementById("back-btn");
const userName = document.getElementById("name");
const done = document.getElementById("done-btn");

backBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

const joinDate = new Date().toDateString();

done.addEventListener("click", function (e) {
  e.preventDefault();
  const nameValue = userName.value.trim();

  if (nameValue === "") {
    alert("Please enter your name");
    return;
  } else {
    localStorage.setItem("userName", nameValue);
    localStorage.setItem("joinDate", joinDate);
    window.location.href = "home.html";
  }
});
