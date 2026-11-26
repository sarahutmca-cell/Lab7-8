// PART A: warm-up page (practice.html). Write your five tasks below the helper.

const results = document.querySelector("#results");

// Helper (provided): writes one line into the page.
function show(text) {
  const li = document.createElement("li");
  li.textContent = text;
  results.appendChild(li);
}

// Example of using it (you can delete this line):
show("Warm-up page is working");

// Task 1: Variables
const name = "Sarah Al-Maliki";
const city = "NYC";
let visits = 0;
visits = visits + 1;

show(
  `My name is ${name} and I live in ${city}. I have visited this page ${visits} times.`,
);

// Task 2: Function and if (ticketLabel)
//Shows the ticket type depending on the age of coniditions
function ticketLabel(age) {
  if (age < 12) {
    return "Child";
  } else if (age < 65) {
    return "Adult";
  } else {
    return "Senior";
  }
}

show(ticketLabel(8));
show(ticketLabel(30));
show(ticketLabel(70));

// Task 3: Array of places

// Adding different places with const conditions to display cities
const places = [
  "Toronto",
  "New Jersey",
  "Maryland",
  "Montreal",
  "New York City",
];

show(places.length);
show(places[places.length - 1]);

for (const place of places) {
  show(place);
}

// Task 4: Array of objects
//these are just objects and their categories
const items = [
  { title: "Tea", category: "Beverages", price: 2.5 },
  { title: "scone", category: "Bakery", price: 6.5 },
  { title: "French Fries", category: "Main course", price: 12.0 },
  { title: "Coffee", category: "Beverages", price: 4.5 },
];

for (const item of items) {
  show(`${item.title}: $${item.price}`);
}

// Task 5: Function with a loop (totalPrice)
// here the function shows the addiition of all the prices I've put above
function totalPrice(items) {
  let total = 0;

  for (const item of items) {
    total = total + item.price;
  }

  return total;
}

show(totalPrice(items));
