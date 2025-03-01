const cardContainer = document.getElementById("card-container");
const completedTaskContainer = document.getElementById("completed-tasks");
const remainingTaskContainer = document.getElementById("remaining-tasks");
const weekdayContainer = document.getElementById("weekday");
const monthContainer = document.getElementById("month");
const historyContainer = document.getElementById("history-container");
const historyClearBtn = document.getElementById("clear-history-btn");
const themeChangeBtn = document.getElementById("theme-change-btn");

let completedTasks = 24;
let remainingTasks = 6;

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

function renderCards() {
  const cardElement = cardData
    .map((card, index) => {
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
                  <button class="bg-primary disabled:bg-primary-1  cursor-pointer rounded-lg px-3 py-2 text-sm text-white card-button"  onclick="handleCardButtonClick(event,'${card.title}')" data-index="${index}">Completed</button>
                </div>
              </div>
            </article>`;
    })
    .join("");

  cardContainer.innerHTML = cardElement;
}

function updateCompletedTasks() {
  completedTaskContainer.textContent = completedTasks;
}

function updateRemainingTasks() {
  remainingTaskContainer.textContent = remainingTasks;
}

function getToday() {
  const today = new Date();

  const weekday = today.toLocaleDateString("en-US", {
    weekday: "short",
  });

  const month = today.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  weekdayContainer.textContent = `${weekday},`;
  monthContainer.textContent = month;
}

function getTime() {
  const timeOfCompletion = new Date();

  const hours = timeOfCompletion.getHours() % 12 || 12;
  const minuts = timeOfCompletion.getMinutes().toString().padStart(2, "0");
  const seconds = timeOfCompletion.getSeconds().toString().padStart(2, "0");
  const ampm = timeOfCompletion.getHours() >= 12 ? "PM" : "AM";

  const time = `${hours
    .toString()
    .padStart(2, "0")}:${minuts}:${seconds}:${ampm}`;

  return time;
}

function handleCardButtonClick(e, title) {
  const time = getTime();

  alert("Board Updated Successfully!");

  if (remainingTasks === 1) {
    alert("Congrats!! You have successfully completed all the current tasks!");
  }

  completedTasks++;
  remainingTasks--;

  const historyItem = `<p class="text-sm text-dark/[0.7] bg-primary-0 p-2">
                You have Complete The Task ${title} at ${time}
              </p>`;

  historyContainer.insertAdjacentHTML("afterbegin", historyItem);
  updateCompletedTasks();
  updateRemainingTasks();
  e.target.disabled = true;
}

historyClearBtn.addEventListener("click", function () {
  historyContainer.replaceChildren();
});

themeChangeBtn.addEventListener("click", function () {
  const color = `rgba(${Math.round(Math.random() * 255)},${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)},0.2)`;

  document.body.style.backgroundColor = color;
});

document.addEventListener("DOMContentLoaded", function () {
  renderCards();
  updateCompletedTasks();
  updateRemainingTasks();
  getToday();
});
