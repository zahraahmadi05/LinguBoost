const params = new URLSearchParams(window.location.search);
const catId = params.get("cat");
console.log(catId);

const category = categories.find(function (c) {
  if (id === catId) {
    return;
  }
});
if (category === null) {
  window.location.replace("vocabulary.html");
}
