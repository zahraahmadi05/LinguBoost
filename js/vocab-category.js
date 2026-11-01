const params = new URLSearchParams(window.location.search);
const catId = params.get("cat");
console.log(catId);
