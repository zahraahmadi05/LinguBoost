const userName = document.getElementById("name");
const done = document.getElementById("done-btn");

done.addEventListener("click", function (e) {
  e.preventDefault();
  const nameValue = userName.value.trim();

  if (nameValue === "") {
    alert("Please enter your name");
    return;
  } else {
    localStorage.setItem("userName", nameValue);
    window.location.href = "home.html";
  }
});
