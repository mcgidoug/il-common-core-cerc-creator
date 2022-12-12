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
  let themeStems = [
    "The theme of the text is ",
    "The theme of this piece is ",
    "The central idea of this piece is ",
  ];
  let themeIdea = [
    "beauty.",
    "good versus evil.",
    "coming of age.",
    "loyalty.",
    "betrayal.",
    "life and death.",
    "justice.",
    "family.",
    "power.",
    "change versus tradition.",
  ];
  let theme =
    themeStems[Math.floor(Math.random() * themeStems.length)] +
    themeIdea[Math.floor(Math.random() * themeIdea.length)];
  // evidence
  let evidenceStem = [
    "The text states ",
    "According to the article ",
    "In the article, the author states ",
    "In the text, the author writes ",
    "It was discovered that ",
    "The narrator states that ",
    "The character states ",
  ];
  let evidence = evidenceStem[Math.floor(Math.random() * evidenceStem.length)];
  // reasoning
  let reasoningStem = [
    "This indicates ",
    "This supports the claim ",
    "This is important because ",
    "This suggests that ",
    "This shows ",
    "This means ",
    "This reveals ",
    "This expresses the idea that ",
    "This confirms ",
    "The author's point is that ",
    "This is significant because ",
  ];
  let reasoning =
    reasoningStem[Math.floor(Math.random() * reasoningStem.length)];
  // result
  result.innerHTML = `${theme} ${evidence} [INSERT QUOTE HERE]. ${reasoning}`;
}
// RL3 - analyze how dialogue propels the story
function readingLit3() {}
// RL4 - determine the meaning of words and phrases (figurative / connotative meanings, tone, analogies, allusions...)
function readingLit4() {}
// RL5 - compare and contrast structure of 2 or more texts, analyze how differing structure contributes to meaning and style
function readingLit5() {}
// RL6 - analyze how differences in POV of character or  reader creates effects such as suspense or humor
function readingLit6() {}

// -------- EVENT LISTENERS --------
rlButton2.addEventListener("click", readingLit2);
rlButton3.addEventListener("click", readingLit3);
rlButton4.addEventListener("click", readingLit4);
rlButton5.addEventListener("click", readingLit5);
rlButton6.addEventListener("click", readingLit6);
