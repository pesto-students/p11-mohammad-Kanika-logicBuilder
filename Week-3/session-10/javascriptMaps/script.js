"use strict"
function calcWordFrequencies() {
    let words = prompt("Please enter the word ");
    words = words.toLowerCase();
    let map = new Map();
    if(words.length===0) {
        console.log("There are no words to count");
        return 0;
    }
    for (let word of words.split(" ")) {

        if (map.has(word)) {
            map.set(word, map.get(word) + 1)
        }
        else {
            map.set(word, 1)
        }


   
}
for (let eachKey of map.keys()) {
    console.log(eachKey,map.get(eachKey));

}

}

//calcWordFrequencies("ny name is kanika")