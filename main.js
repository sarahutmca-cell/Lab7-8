// Lab 7: Campus Cafe page (index.html). Test after each step.
// If you use an AI tool, describe how you used it in a comment here.

// PART B: CHANGE THE PAGE
// - Set the h1 (#pageTitle) text to a title of your choice.
// - Hide note button (#noteBtn): toggle the class d-none on #note,
//   change the button text between "Hide note" and "Show note",
//   and update aria-expanded.
// - Dark mode button (#themeBtn): switch data-bs-theme on <html>
//   between "light" and "dark", change its text, and update aria-pressed.

// PART C: CARDS FROM THE ARRAY
// - priceLabel(price): "Free" if 0, "Under $5" if less than 5, else "$" + price.
// - cardHTML(item): returns the HTML for one card
//   (col-12 md:col-6 lg:col-4, card h-100, card-body).
//   It shows title, category, priceLabel(price) and a Save button with
//   class "save-btn", a data-id, and aria-pressed="false".
// - Draw the cards into #tourList with map and join.
// - Save buttons toggle is-saved, the text Save / Saved and aria-pressed.
//   #savedCount always shows how many items are saved.

// PART D: FILTER AND SEARCH
// - Two state variables: activeCategory and query.
// - One update() function: filter the items, draw them, update #count.
// - Category buttons (.filter-btn) set activeCategory, move is-active and aria-pressed.
// - #searchBox (input event) sets query. Ignore capital letters.
// - #count shows "Showing 3 of 8 items". If nothing matches, show a message.
