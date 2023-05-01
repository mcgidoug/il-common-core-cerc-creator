import {
  themeStems,
  // themeWords,
  evidenceStem,
  reasoningStem,
  interactStems,
  // interactWords,
  conclusionStem,
  interpretationStems,
  // interpretationWords,
  comparisonStems,
  // comparisonWords,
  povStems,
  // povWords,
} from "./stems.js";
// -------- RL BUTTONS --------
let rlButton2 = document.getElementById("reading_lit2");
let rlButton3 = document.getElementById("reading_lit3");
let rlButton4 = document.getElementById("reading_lit4");
let rlButton5 = document.getElementById("reading_lit5");
let rlButton6 = document.getElementById("reading_lit6");

// -------- CERC RESULT --------
let result = document.getElementById("result_box");

// RL2 - determine theme or central idea
function readingLit2() {
  // claim
  let claim = themeStems[Math.floor(Math.random() * themeStems.length)];
  // themeWords[Math.floor(Math.random() * themeWords.length)].toLowerCase();
  // evidence
  let evidence = evidenceStem[Math.floor(Math.random() * evidenceStem.length)];
  // reasoning
  let reasoning =
    reasoningStem[Math.floor(Math.random() * reasoningStem.length)];
  // conclusion
  let conclusion =
    conclusionStem[Math.floor(Math.random() * conclusionStem.length)];
  // result
  result.innerHTML = `${claim} ${evidence} <span class="quote">[INSERT QUOTE HERE]</span>. ${reasoning}. ${conclusion}.`;
}
// RL3 - analyze how dialogue propels the story
function readingLit3() {
  // claim
  let claim = interactStems[Math.floor(Math.random() * interactStems.length)];
  // interactWords[
  //   Math.floor(Math.random() * interactWords.length)
  // ].toLowerCase();
  // evidence
  let evidence = evidenceStem[Math.floor(Math.random() * evidenceStem.length)];
  // reasoning
  let reasoning =
    reasoningStem[Math.floor(Math.random() * reasoningStem.length)]; // conclusion
  let conclusion =
    conclusionStem[Math.floor(Math.random() * conclusionStem.length)];
  // result
  result.innerHTML = `${claim} ${evidence} <span class="quote">[INSERT QUOTE HERE]</span>. ${reasoning}. ${conclusion}.`;
}
// RL4 - determine the meaning of words and phrases (figurative / connotative meanings, tone, analogies, allusions_____)
function readingLit4() {
  // claim
  let claim =
    interpretationStems[Math.floor(Math.random() * interpretationStems.length)];
  // interpretationWords[
  //   Math.floor(Math.random() * interpretationWords.length)
  // ].toLowerCase();
  // evidence
  let evidence = evidenceStem[Math.floor(Math.random() * evidenceStem.length)];
  // reasoning
  let reasoning =
    reasoningStem[Math.floor(Math.random() * reasoningStem.length)]; // conclusion
  let conclusion =
    conclusionStem[Math.floor(Math.random() * conclusionStem.length)];
  // result
  result.innerHTML = `${claim} ${evidence} <span class="quote">[INSERT QUOTE HERE]</span>. ${reasoning}. ${conclusion}.`;
}
// RL5 - compare and contrast structure of 2 or more texts, analyze how differing structure contributes to meaning and style
function readingLit5() {
  // claim
  let claim =
    comparisonStems[Math.floor(Math.random() * comparisonStems.length)];
  // comparisonWords[
  //   Math.floor(Math.random() * comparisonWords.length)
  // ].toLowerCase();
  // evidence
  let evidence = evidenceStem[Math.floor(Math.random() * evidenceStem.length)];
  // reasoning
  let reasoning =
    reasoningStem[Math.floor(Math.random() * reasoningStem.length)]; // conclusion
  let conclusion =
    conclusionStem[Math.floor(Math.random() * conclusionStem.length)];
  // result
  result.innerHTML = `${claim} ${evidence} <span class="quote">[INSERT QUOTE HERE]</span>. ${reasoning}. ${conclusion}.`;
}
// RL6 - analyze how differences in POV of character or  reader creates effects such as suspense or humor
function readingLit6() {
  // claim
  let claim = povStems[Math.floor(Math.random() * povStems.length)];
  // povWords[Math.floor(Math.random() * povWords.length)].toLowerCase();
  // evidence
  let evidence = evidenceStem[Math.floor(Math.random() * evidenceStem.length)];
  // reasoning
  let reasoning =
    reasoningStem[Math.floor(Math.random() * reasoningStem.length)]; // conclusion
  let conclusion =
    conclusionStem[Math.floor(Math.random() * conclusionStem.length)];
  // result
  result.innerHTML = `${claim} ${evidence} <span class="quote">[INSERT QUOTE HERE]</span>. ${reasoning}. ${conclusion}.`;
}

// -------- EVENT LISTENERS --------
rlButton2.addEventListener("click", readingLit2);
rlButton3.addEventListener("click", readingLit3);
rlButton4.addEventListener("click", readingLit4);
rlButton5.addEventListener("click", readingLit5);
rlButton6.addEventListener("click", readingLit6);
