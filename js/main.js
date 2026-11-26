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
    {id:1, title: "Tea", category:"Beverages", price: 1.50 }
    {id:2, title: "Iced Vanilla Matacha", category:"Beverages", price: 3.50 }
    {id:3, title: "Iced coffee", category:"Beverages", price: 2.50 }
    {id:4, title: "Chocolate Lava Cake", category:"Pasteries", price: 5.00 }
    {id:5, title: "Carrot & Pecan pound cake", category:"Pasteries", price: 7.50 }
    {id:6, title: "Chicken ham and swiss cheese toast", category:"Main Meals", price: 12.50 }
    {id:7, title: "Cheese and jam roll", category:"Pasteries", price: 4.50 }
    {id:8, title: "American Cheese stuffed croissant", category:"Main Meals", price: 8.50 }
];
















// PART D: FILTER AND SEARCH
// - Two state variables: activeCategory and query.
// - One update() function: filter the items, draw them, update #count.
// - Category buttons (.filter-btn) set activeCategory, move is-active and aria-pressed.
// - #searchBox (input event) sets query. Ignore capital letters.
// - #count shows "Showing 3 of 8 items". If nothing matches, show a message.
