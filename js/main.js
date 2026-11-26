// Lab 7: Campus Cafe page (index.html). Test after each step.
// If you use an AI tool, describe how you used it in a comment here.

// Claude AI was used to help me understand why certain codes are used.

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

const items= [
    {id: title:  "Tea", category:"Beverages", price }
]
















// PART D: FILTER AND SEARCH
// - Two state variables: activeCategory and query.
// - One update() function: filter the items, draw them, update #count.
// - Category buttons (.filter-btn) set activeCategory, move is-active and aria-pressed.
// - #searchBox (input event) sets query. Ignore capital letters.
// - #count shows "Showing 3 of 8 items". If nothing matches, show a message.
