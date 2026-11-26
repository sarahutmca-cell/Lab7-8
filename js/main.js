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
  noteBtn.textContent = isHidden ? "Show Note" : "Hide note";
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
function priceLabel(price) {
  if (price === 0) {
    return "Free";
  } else if (price < 5) {
    return "Under $5";
  }

  return "$" + price;
}

function cardHTML(item) {
  return `
  <div class="col-12 md:col-6 lg:col-4">
  <div class="card h-100">
  <div class="card-body">
  <h3 class="card-title">${item.title}</h3>
  <p>${item.category}</p>
  <p>${priceLabel(item.price)}</p>
  <button 
  type="button"
  class="btn-solid theme-primary mt-auto save-btn"
  data-id="${item.id}"
  aria-pressed="false"
  >
  Save
  </button>
  </div>
  </div>
  </div>
  `;
}

const tourList = document.querySelector("#tourList");
tourList.innerHTML = items.map(cardHTML).join("");

const savedIds = [];
const savedCount = document.querySelector("#savedCount");
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
function update() {
  const shown = items.filter(
    (item) =>
      (activeCategory == "All" || item.category === activeCategory) &&
      item.title.toLowerCase().includes(query),
  );
  document.querySelectorAll(".filter-btn").forEach(btn => { 
btn.addEventListener("click", () => {
  activeCategory=btn.dataset.category;
  document.querySelectorAll(".filter")

});
});
    
  }
  renderItems(shown);

  function renderItems(list) {
    tourList.innerHTML = list.map(cardHTML).join("");
    count.textContent = `showing ${list.length} of ${items.length} items `;
  }

  function renderItems(list) {
    if (list.length ===0){
      tourList.innerHTML="<p>No items match your search.</p>"

    } else {
      tourList.innerHTML=list.map(cardHTML).join("");
    }
    count.textContent=`Showing ${list.length} of ${items.length} items`;
   
}
