// -------- RL BUTTONS --------
let rlButton2 = document.getElementById("reading_lit2");
let rlButton3 = document.getElementById("reading_lit3");
let rlButton4 = document.getElementById("reading_lit4");
let rlButton5 = document.getElementById("reading_lit5");
let rlButton6 = document.getElementById("reading_lit6");

// -------- CERC RESULT --------
let cercResult = document.getElementById("cerc_result");

// RL2 - determine theme or central idea
function readingLit2() {
  let claimWords = ["jaded", "confused", "flabergasted", "spun"];
  let claim = claimWords[Math.floor(Math.random() * claimWords.length)];
}
// RL3 - analyze how dialogue propels the story
function readingLit3() {
  let claimWords = ["jaded", "confused", "flabergasted", "spun"];
  let claim = claimWords[Math.floor(Math.random() * claimWords.length)];
}
// RL4 - determine the meaning of words and phrases (figurative / connotative meanings, tone, analogies, allusions...)
function readingLit4() {
  let claimWords = ["jaded", "confused", "flabergasted", "spun"];
  let claim = claimWords[Math.floor(Math.random() * claimWords.length)];
}
// RL5 - compare and contrast structure of 2 or more texts, analyze how differing structure contributes to meaning and style
function readingLit5() {
  let claimWords = ["jaded", "confused", "flabergasted", "spun"];
  let claim = claimWords[Math.floor(Math.random() * claimWords.length)];
}
// RL6 - analyze how differences in POV of character or  reader creates effects such as suspense or humor
function readingLit6() {
  let claimWords = ["jaded", "confused", "flabergasted", "spun"];
  let claim = claimWords[Math.floor(Math.random() * claimWords.length)];
}

// -------- EVENT LISTENERS --------
rlButton2.addEventListener("click", readingLit2);
rlButton3.addEventListener("click", readingLit3);
rlButton4.addEventListener("click", readingLit4);
rlButton5.addEventListener("click", readingLit5);
rlButton6.addEventListener("click", readingLit6);
