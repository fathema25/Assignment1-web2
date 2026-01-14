"use strict";

// ----------------------
// Data
// ----------------------
const characters = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// Broken data for Exercise 6
const brokenCharacters = [
  { id: 1, age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3 },
  { id: 4, name: "Leia Organa" }
];

// ----------------------
// Exercise 1 - Print all names
// ----------------------
characters.forEach(character => {
  console.log(character.name);
  const li = document.createElement("li");
  li.textContent = character.name;
  document.getElementById("names-list").appendChild(li);
});

// ----------------------
// Exercise 2 - Characters under 40
// ----------------------
characters.forEach(character => {
  if (character.age < 40) {
    console.log(character.name);
    const li = document.createElement("li");
    li.textContent = character.name;
    document.getElementById("young-characters-list").appendChild(li);
  }
});

// ----------------------
// Exercise 3 & 5 - Reusable function with error handling
// ----------------------
function renderList(array, listId, errorDivId = null) {
  const list = document.getElementById(listId);
  const errorDiv = errorDivId ? document.getElementById(errorDivId) : null;

  array.forEach(character => {
    const li = document.createElement("li");

    if (character.name) {
      li.textContent = character.name;
    } else {
      li.textContent = "Error: Name missing";

      if (errorDiv) {
        const msg = document.createElement("div");
        msg.textContent = "Error: Character object missing name";
        errorDiv.appendChild(msg);
      }
    }

    list.appendChild(li);
  });
}

// Exercise 3
renderList(characters, "function-list");

// Exercise 5
renderList(brokenCharacters, "error-handling-list", "error-messages");

// ----------------------
// Exercise 4 & 5 - Age filter function
// ----------------------
function renderByAge(array, ageLimit, listId, errorDivId = null) {
  const list = document.getElementById(listId);
  const errorDiv = errorDivId ? document.getElementById(errorDivId) : null;

  array.forEach(character => {
    if (character.name && character.age < ageLimit) {
      const li = document.createElement("li");
      li.textContent = character.name;
      list.appendChild(li);
    }

    if (!character.name && errorDiv) {
      const msg = document.createElement("div");
      msg.textContent = "Error: Character object missing name";
      errorDiv.appendChild(msg);
    }
  });
}

// Exercise 4
renderByAge(characters, 40, "age-filter-list");

// Exercise 6
renderList(brokenCharacters, "broken-array-list", "broken-array-errors");
