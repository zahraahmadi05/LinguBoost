function countWords(catId) {
  const words = vocab.filter(function (w) {
    if (w.category === catId) {
      return true;
    }
  });
  return words.length;
}

function createCategoryCard(cat) {
  return `
    <a
            href="vocab-category.html?cat=${cat.id}"
            class="flex flex-col rounded-2xl bg-[#DEE5FF] border border-[#7881FB] p-2 items-center"
          >
            <img
              src="${cat.img}"
              alt=""
              class="w-10 h-10 shrink-0"
            />
            <span class="text-[#5044FA] text-xs mt-1">${cat.title}</span>
            <div class="mt-auto flex w-full items-end justify-between pt-2">
              <span
                class="text-[#7394EF] text-xs self-start"
                >${countWords(cat.id)} Words</span
              >
              <img src="icons/arrow-right.png" alt="" class="w-5 h-6 shrink-0" />
            </div>
          </a>
    `;
}

const categoryGridEl = document.getElementById("category-grid");
categoryGridEl.innerHTML = categories.map(createCategoryCard).join("");
