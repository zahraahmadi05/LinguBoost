const categoryIconEl = document.getElementById("category-icon");
const categoryTitleEl = document.getElementById("category-title");
const wordCountEl = document.getElementById("word-count");
const categoryTaglineEl = document.getElementById("category-tagline");
const categoryTextIconEl = document.getElementById("text-icon");
const wordListEl = document.getElementById("word-list");

const params = new URLSearchParams(window.location.search);
const catId = params.get("cat");

function getLearned() {
  const saved = localStorage.getItem("learnedWords");
  if (saved === null) {
    return {};
  }
  return JSON.parse(saved);
}

function saveLearned(obj) {
  localStorage.setItem("learnedWords", JSON.stringify(obj));
}

function createWordCard(item) {
  const isLearned = getLearned()[item.id] === true;

  return `
  <li class="relative rounded-2xl border border-[#81A7F1] bg-white p-4">
            <div data-content class="flex flex-col gap-2 pr-8 ${isLearned ? "opacity-50" : ""}">
              <div class="flex items-center gap-2">
                <h2 class="text-[#082DC0] text-lg">${item.word}</h2>
                <span
                  class="rounded-full px-3 py-0.5 text-sm bg-[#CACDFA] text-[#1F82FB]"
                  >${item.type}</span
                >
              </div>
              <p class="text-[#5288D4]">${item.meaning}</p>
              <p class="rounded-xl bg-[#DAEDF9] px-3 py-2 text-[#5676F6]">
                ${item.example}
              </p>
            </div>
            <button
              type="button"
              data-learn="${item.id}"
              aria-pressed="${isLearned}"
              aria-label="Mark ${item.word} as learned"
              class="absolute top-1 right-1 flex h-11 w-11 cursor-pointer items-center justify-center"
            >
              <span
                class="flex w-8 h-8 items-center justify-center rounded-full border-2 border-[#6EE615]"
              >
                <img src="icons/check.png" alt="" class="w-6 h-6 ${isLearned ? "" : "hidden"}" />
              </span>
            </button>
          </li>
  `;
}

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

  wordListEl.innerHTML = categoryWords.map(createWordCard).join("");
}

wordListEl.addEventListener("click", function (e) {
  const btn = e.target.closest("[data-learn]");

  if (!btn) {
    return;
  }

  const id = btn.dataset.learn;

  const learned = getLearned();
  if (learned[id]) {
    delete learned[id];
  } else {
    learned[id] = true;
  }

  saveLearned(learned);

  const isNowLearned = learned[id] === true;
  const content = btn.closest("li").querySelector("[data-content]");
  const img = btn.querySelector("img");

  content.classList.toggle("opacity-50", isNowLearned);
  img.classList.toggle("hidden", !isNowLearned);
  btn.setAttribute("aria-pressed", isNowLearned);
});
