// Lab 7: Campus Cafe page (index.html). Test after each step.
// If you use an AI tool, describe how you used it in a comment here.

// Claude AI was used to help me understand why certain codes are being used.

// PART B: CHANGE THE PAGE
// - Set the h1 (#pageTitle) text to a title of your choice.

const pageTitle = document.querySelector("#pageTitle");
pageTitle.textContent = "Cat Cafe";

// - Hide note button (#noteBtn): toggle the class d-none on #note,

const note = document.querySelector("#note");
const noteBtn = document.querySelector("#noteBtn");

noteBtn.addEventListener("click", () => {
  const isHidden = note.classList.toggle("d-none");
  noteBtn.textContent = isHidden ? "Show note" : "Hide note";
  noteBtn.setAttribute("aria-expanded", !isHidden);
});

const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", () => {
  const root = document.documentElement;
  const goDark = root.getAttribute("data-bs-theme") !== "dark";
  root.setAttribute("data-bs-theme", goDark ? "dark" : "light");
  themeBtn.textContent = goDark ? "Light mode" : "Dark mode";
  themeBtn.setAttribute("aria-pressed", goDark);
});

// PART C: CARDS FROM THE ARRAY
const savedIds = [];
const tourList = document.querySelector("#tourList");
const savedCount = document.querySelector("#savedCount");
// Returns a price label based on the item's price.
function priceLabel(price) {
  if (price === 0) {
    return "Free";
  } else if (price < 5) {
    return "Under $5";
  }

  return "$" + price;
}
// This creates the HTML for one item card.
//The div classes dimensions has been copied from previous lab to ensure card dimensions are accurate
function cardHTML(item) {
  const isSaved = savedIds.includes(item.id);
  return `
  <div class="col-12 md:col-6 lg:col-4"> 
  <div class="card h-100"> 
  <div class="card-body d-flex flex-column">
  <h3 class="card-title">${item.title}</h3>
  <p>${item.category}</p>
  <p>${priceLabel(item.price)}</p>
  <button 
  type="button"
  class="btn-solid theme-primary mt-auto save-btn${isSaved ? " is-saved" : ""}"
  data-id="${item.id}"
  aria-pressed="${isSaved}"
  >
  ${isSaved ? "Saved" : "Save"}
  </button>
  </div>
  </div>
  </div>
  `;
}

tourList.addEventListener("click", (event) => {
  const btn = event.target.closest(".save-btn");

  if (!btn) return;
  const id = Number(btn.dataset.id);
  const isSaved = btn.classList.toggle("is-saved");
  btn.textContent = isSaved ? "Saved" : "Save";
  btn.setAttribute("aria-pressed", isSaved);

  if (isSaved) {
    savedIds.push(id);
  } else {
    savedIds.splice(savedIds.indexOf(id), 1);
  }
  savedCount.textContent = savedIds.length;
});

// PART D: FILTER AND SEARCH
let activeCategory = "All";
let query = "";

const count = document.querySelector("#count");
// Shows the filtered items and updates the item count.
function renderTours(list) {
  if (list.length === 0) {
    tourList.innerHTML = "<p>No items match your search.</p>";
  } else {
    tourList.innerHTML = list.map(cardHTML).join("");
  }
  count.textContent = `Showing ${list.length} of ${items.length} items`;
}
// Filters the items based on the categories that I have inputted above along with search
function update() {
  const shown = items.filter(
    (item) =>
      (activeCategory === "All" || item.category === activeCategory) &&
      item.title.toLowerCase().includes(query),
  );
  renderTours(shown);
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  //Here I have used AI's chatGPT's help because i did not know how to make sure the filteration is working, so I have took some example, then implemented it
  btn.addEventListener("click", () => {
    activeCategory = btn.dataset.category;
    document.querySelectorAll(".filter-btn").forEach((filterBtn) => {
      const isActive = filterBtn === btn;
      filterBtn.classList.toggle("is-active", isActive);
      filterBtn.setAttribute("aria-pressed", isActive);
    });
    update();
  });
});
update();

const searchBox = document.querySelector("#searchBox");

searchBox.addEventListener("input", (event) => {
  //here I have used Claude AI to add the value to lowercase to make sure search box filtering does not get impact results
  query = event.target.value.toLowerCase();
  update();
});
