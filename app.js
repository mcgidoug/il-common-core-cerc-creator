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

// -------- MAIN FUNCTIONALITY --------
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

// -------- EVENT LISTENERS --------
rlButton2.addEventListener("click", () => readingLit(themeStems));
rlButton3.addEventListener("click", () => readingLit(interactStems));
rlButton4.addEventListener("click", () => readingLit(interpretationStems));
rlButton5.addEventListener("click", () => readingLit(comparisonStems));
rlButton6.addEventListener("click", () => readingLit(povStems));
