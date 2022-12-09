// CLAIM, REASONING, EVIDENCE, CONCLUSION 
// CLAIM WORD, TRANSITION WORD, ANALYSIS WORD

// main function - takes in user input (which standard they are writing to)
// main function will call upon one of the standard functions depending on user input
function createParagraph(input){
    if(input == "RL2"){
        console.log(readingLit2())
    } 
    if(input == "RL3"){
        console.log(readingLit2())
    } 
    if(input == "RL4"){
        console.log(readingLit2())
    } 
    if(input == "RL5"){
        console.log(readingLit2())
    } 
    if(input == "RL6"){
        console.log(readingLit2())
    } 
}

// RL2 - determine theme or central idea
function readingLit2(){
    let claimWords = ["jaded", "confused", "flabergasted", "spun"]
    let claim = claimWords[Math.floor(Math.random()*claimWords.length)]
    return claim;
}
// RL3 - analyze how dialogue propels the story
function readingLit3(){
    let claimWords = ["jaded", "confused", "flabergasted", "spun"]
    let claim = claimWords[Math.floor(Math.random()*claimWords.length)]
    return claim;
}
// RL4 - determine the meaning of words and phrases (figurative / connotative meanings, tone, analogies, allusions...)
function readingLit4(){
    let claimWords = ["jaded", "confused", "flabergasted", "spun"]
    let claim = claimWords[Math.floor(Math.random()*claimWords.length)]
    return claim;
}
// RL5 - compare and contrast structure of 2 or more texts, analyze how differing structure contributes to meaning and style
function readingLit5(){
    let claimWords = ["jaded", "confused", "flabergasted", "spun"]
    let claim = claimWords[Math.floor(Math.random()*claimWords.length)]
    return claim;
}
// RL6 - analyze how differences in POV of character or  reader creates effects such as suspense or humor
function readingLit6(){
    let claimWords = ["jaded", "confused", "flabergasted", "spun"]
    let claim = claimWords[Math.floor(Math.random()*claimWords.length)]
    return claim;
} 

createParagraph("RL2")
