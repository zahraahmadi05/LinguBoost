const categoryIconEl = document.getElementById("category-icon");
const categoryTitleEl = document.getElementById("category-title");
const wordCountEl = document.getElementById("word-count");
const categoryTaglineEl = document.getElementById("category-tagline");
const categoryTextIconEl = document.getElementById("text-icon");
const wordListEl = document.getElementById("word-list");

const params = new URLSearchParams(window.location.search);
const catId = params.get("cat");

const category = categories.find(function (c) {
  if (c.id === catId) {
    return true;
  }
  return false;
});

if (!category) {
  window.location.replace("vocabulary.html");
} else {
  const categoryWords = vocab.filter(function (w) {
    if (w.category === catId) {
      return true;
    }
    return false;
  });
  categoryTitleEl.textContent = category.title;
  categoryTaglineEl.textContent = category.tagline;
  categoryTextIconEl.src = category.icon;
  wordCountEl.textContent = `${categoryWords.length} words`;
  categoryIconEl.src = category.img;
  categoryIconEl.alt = category.title;
}
