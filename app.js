import {
  themeStems,
  evidenceStem,
  reasoningStem,
  interactStems,
  conclusionStem,
  interpretationStems,
  comparisonStems,
  povStems,
} from "./stems.js";

// -------- RL BUTTONS --------
const rlButton2 = document.getElementById("reading_lit2");
const rlButton3 = document.getElementById("reading_lit3");
const rlButton4 = document.getElementById("reading_lit4");
const rlButton5 = document.getElementById("reading_lit5");
const rlButton6 = document.getElementById("reading_lit6");

// -------- CERC RESULT --------
let result = document.getElementById("result_box");
let clearCercButton = document.getElementById("clear_cerc_button");

// -------- CERC RESULT --------
let showButton = document.getElementById("show_button");
let saveButton = document.getElementById("save_button");
let clearStorageButton = document.getElementById("clear_storage_button");

// -------- CREATE CERC --------
function readingLit(claimArray) {
  // claim
  let claim = claimArray[Math.floor(Math.random() * claimArray.length)];
  // evidence
  let evidence = evidenceStem[Math.floor(Math.random() * evidenceStem.length)];
  // reasoning
  let reasoning =
    reasoningStem[Math.floor(Math.random() * reasoningStem.length)];
  // conclusion
  let conclusion =
    conclusionStem[Math.floor(Math.random() * conclusionStem.length)];
  // result box
  result.innerHTML = `<span class="claim_color">${claim}</span> <span class="evidence_color">${evidence}[INSERT QUOTE HERE]</span>. <span class="reasoning_color">${reasoning}</span>.<span class="conclusion_color">${conclusion}</span>.`;
}

// -------- SAVE CERC --------
function saveFunction() {
  let content = result.innerHTML;
  // Retrieve existing saved items or create a new empty array
  let savedItems = JSON.parse(localStorage.getItem("cercContentList")) || [];
  // Add the current item to the array
  savedItems.push(content);
  // Save the updated array in local storage
  localStorage.setItem("cercContentList", JSON.stringify(savedItems));
  // Display the list of stored items
  const savedContentElement = document.getElementById("save_box");
  savedContentElement.innerHTML = "";
  savedItems.forEach((item) => {
    savedContentElement.innerHTML += `<li>${item}</li>`;
  });
}

// -------- SHOW SAVED CERCS --------
function showSavedContent() {
  const savedContentElement = document.getElementById("save_box");
  // Retrieve existing stored items or create a new empty array
  let savedItems = JSON.parse(localStorage.getItem("cercContentList")) || [];
  // Display the list of stored items
  savedContentElement.innerHTML = "";
  if (savedItems.length === 0) {
    savedContentElement.innerHTML = "No stored content.";
  } else {
    savedItems.forEach((item) => {
      savedContentElement.innerHTML += `<li>${item}</li>`;
    });
  }
}

// -------- EVENT LISTENERS --------
rlButton2.addEventListener("click", () => readingLit(themeStems));
rlButton3.addEventListener("click", () => readingLit(interactStems));
rlButton4.addEventListener("click", () => readingLit(interpretationStems));
rlButton5.addEventListener("click", () => readingLit(comparisonStems));
rlButton6.addEventListener("click", () => readingLit(povStems));

showButton.addEventListener("click", showSavedContent);
saveButton.addEventListener("click", saveFunction);

clearCercButton.addEventListener("click", () => (result.innerHTML = ""));
clearStorageButton.addEventListener("click", () => {
  localStorage.removeItem("cercContentList");
  const savedContentElement = document.getElementById("save_box");
  savedContentElement.innerHTML = "";
});
