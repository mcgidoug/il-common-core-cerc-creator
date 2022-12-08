// main function - takes in user input (which standard they are writing to)
// main function will call upon one of the standard functions depending on user input

function createParagraph(input){
    if(input == "RL2"){
        console.log(readingLit2())
    } 
}

// RL2 - determine theme or central idea
function readingLit2(){
    let claimWords = ["jaded", "confused", "flabergasted", "spun"]
    let claim = claimWords[Math.floor(Math.random()*claimWords.length)]
    return claim;
}

createParagraph("RL2")
