const cardContainer = document.getElementById("card-container");

const cardData = [
  {
    subtitle: "ShopEase",
    title: "Fix Mobile Button Issue",
    paragraph:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly and ensure onClick works properly",
  },
  {
    subtitle: "CloudSync",
    title: "Add Dark Mode",
    paragraph:
      "Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
  },
  {
    subtitle: "SwiftPay",
    title: "Optimize  Home page",
    paragraph:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
  },
  {
    subtitle: "Meta",
    title: "Add new emoji 🤲",
    paragraph:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly and ensure onClick works properly",
  },
  {
    subtitle: "Google LLC",
    title: "Integrate OpenAI API",
    paragraph:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly and ensure onClick works properly",
  },
  {
    subtitle: "Glassdoar",
    title: "Improve Job searching ",
    paragraph:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly and ensure onClick works properly",
  },
];

function handleCardButtonClick(event, title) {
  console.log(event.target, title);
}

function renderCards() {
  const cardElement = cardData
    .map((card) => {
      return `<article
              class="bg-primary-0 rounded-lg p-4 flex flex-col gap-4 justify-between"
            >
              <div class="space-y-4 pb-4 border-primary-1 border-b border-dashed">
                <p
                  class="bg-white rounded-lg text-sm text-dark py-1.5 px-2 w-max"
                >
                  ${card.subtitle}
                </p>
                <h3 class="text-lg font-medium text-dark">${card.title}</h3>
                <p class="line-clamp-2 bg-white rounded-lg py-2 px-3 text-sm text-black/[0.5]">
                  ${card.paragraph}
                </p>
              </div>
              <div class="flex items-center justify-between gap-1">
                <div>
                  <p class="text-xs text-dark/[0.7]">Deadline</p>
                  <h4 class="text-sm font-medium text-dark">21 March 2025</h4>
                </div>
                <div>
                  <button class="bg-primary disabled:bg-primary-1  cursor-pointer rounded-lg px-3 py-2 text-sm text-white card-button"  onclick="handleCardButtonClick(event,'${card.title}')">Completed</button>
                </div>
              </div>
            </article>`;
    })
    .join("");

  cardContainer.innerHTML = cardElement;
}

document.addEventListener("DOMContentLoaded", function () {
  renderCards();
});
