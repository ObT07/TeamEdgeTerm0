// Hidden array you didn't see me
let hiddenArray = ["what", "is", "the", "secret", "word", "it","is","Minecraft"]

const createArray = () => {
    let hiddenLetterArray = [];
    let size = Math.floor(Math.random() * 50) + 3;
    for (let i = 0; i <= size; i++) {
        let letter = String.fromCharCode(96 + Math.floor(Math.random() * 26) + 1)
        letter = letter.toUpperCase();
        hiddenLetterArray.push(letter);
    }
    hiddenLetterArray.push("ZZZZ");
    return hiddenLetterArray;
};



// Hi class today we will be working in groups to solve some challenges

// ************** Challenge 1: Creating Arrays **************
// Create a blank array called myFavFoods
// Create another array called SadeemsFavFoods and initialize it with sushi, italian sandwich and chocolate

let myFavFoods = [];
let SadeemsFavFoods = ["suhi", "italian sandwich", "chocolate"];

// Now print out both arrays using console.log

console.log(myFavFoods)
console.log(SadeemsFavFoods)

// You see how it prints out similar to how you wrote it
// How can you print an array like a string


console.log(SadeemsFavFoods.toString());
console.log(myFavFoods.toString());

// ************** Challenge 2: Accessing Arrays **************
// I have made a list of airport codes
// I want you to only print out the airport closest to you
// hint look up indexing arrays
let airports = ["JFK", "DTW", "LAX", "ATL", "PHX"];

console.log(airports[1]);
// now lets add SEA for settle to the end of our array
// then print it out
// hint look up push

airports.push("SEA");

console.log(airports);

// Now replace LAX with LAS for Las Vegas
// then print it out
// hint indexing

airports[2] = "LAS";

console.log(airports);


// You know what I'm tired of the last item in the list, lets remove it
// then print it out
// hint pop


airports.pop();

console.log(airports);








// ************** Challenge 3: Hidden Array **************
// There is an array at the bottom of the page
// DON'T SCROLL UP
// the array is called hiddenArray
// I have hidden a word in the array
// using includes can you find which word is in the array
let secretWord1 = "Mortal Kombat";
let secretWord2 = "Mario Kart";
let secretWord3 = "Minecraft";

if (hiddenArray.includes(secretWord1)) {
    console.log("Found " + secretWord1)
} else if (hiddenArray.includes(secretWord2)) {
    console.log("Found " + secretWord2)
} else if (hiddenArray.includes(secretWord3)) {
    console.log("Found " + secretWord3)
} else {
    console.log("Not Found")
}

// Now that you found the secret word
// lets find the index of it in the hiddenArray
// hint look up index of

let index = hiddenArray.indexOf(secretWord3);

// Lastly print out the secret word from the array using the index



console.log(hiddenArray[index]);






// ************** Challenge 4: Number Array **************
// create an array of a random size filled with random letters
// What is the length of letterArray
// hint feel free to print the array but don't count it out yourself, let the computer do the hard work
let letterArray = createArray();

let length = letterArray.length

// Now that you know the length 
// can we print out the last letter in the array

console.log(letterArray[letterArray.length-1]);


// BONUS
// can you sort the array and print it out?
// letterArray.sort();
// console.log(letterArray);