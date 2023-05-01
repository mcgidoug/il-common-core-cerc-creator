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

// -------- CERC RESULT --------
let storeButton = document.getElementById("store_button");

// -------- CERC FUNCTIONALITY --------
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
  result.innerHTML = `${claim} ${evidence} <span class="quote">[INSERT QUOTE HERE]</span>. ${reasoning}. ${conclusion}.`;
}

// -------- CERC FUNCTIONALITY --------
function storeFunction() {
  const content = result.innerHTML;
  // Retrieve existing stored items or create a new empty array
  let storedItems = JSON.parse(localStorage.getItem("cercContentList")) || [];
  // Add the current item to the array
  storedItems.push(content);
  // Store the updated array in local storage
  localStorage.setItem("cercContentList", JSON.stringify(storedItems));
  // Display the list of stored items
  const storedContentElement = document.getElementById("store_box");
  storedContentElement.innerHTML = "";
  storedItems.forEach((item) => {
    storedContentElement.innerHTML += `<li>${item}</li>`;
  });
}

// -------- EVENT LISTENERS --------
rlButton2.addEventListener("click", () => readingLit(themeStems));
rlButton3.addEventListener("click", () => readingLit(interactStems));
rlButton4.addEventListener("click", () => readingLit(interpretationStems));
rlButton5.addEventListener("click", () => readingLit(comparisonStems));
rlButton6.addEventListener("click", () => readingLit(povStems));
storeButton.addEventListener("click", storeFunction);
