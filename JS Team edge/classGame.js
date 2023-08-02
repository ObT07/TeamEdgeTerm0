
const INPUT = require("readline-sync");

//This is the starter file for CYOA
//Use it to develop your skills as needed

//an empty string to hold our user inputs
let inputMsg = "";
//the game loop will depend on this being true
let gameIsOn = true;
//to keep track of where we are
let currentLocation = null;
//push any new rooms you create to this array
let rooms = [];
// Creating assests(ascii art)
let guitar = '';

// add the rooms to the array

rooms.push("Practice Area", "Bedroom")

//******** DEFINE CLASSES *******************
// Create a class for Room and for Player
class Player {
    constructor(name, health, practiceTime, items) {
        this.name = name;
        this.health = health;
        this.practiceTime = practiceTime;
        this.items = items;
    }
}

class Room {
    constructor(name, description, objects, paths) {
        this.name = name;
        this.description = description;
        this.objects = objects;
        this.paths = paths;
    }
}

class Band {
    constructor(name, health, practiceTime) {
        this.name = name;
        this.health = health;
        this.practiceTime = practiceTime;
    }
}

//**********INSTANTIATE OBJECTS ***************
// Create your Player
let player = new Player();
player.name = null;
player.items = [];

// Create some rooms
let practiceRoom = new Room();
practiceRoom.name = "Practice Area";
practiceRoom.description = "Glorified storage Unit";
practiceRoom.objects = ["Guitar", "Drums", "Chair"];
practiceRoom.paths = ["bedroom"];

let bedroom = new Room();
bedroom.name = "Bedroom";
bedroom.description = "Furniture includes: Tv, Mattress, Laptop, and guitar. Nothing of value";
bedroom.objects = ["Bed, Mattress, Tv, Laptop"];
bedroom.paths = ["practiceRoom"];

//add the rooms to the rooms array

//************* START GAME *************************
function start() {

    // saves the player name
    console.log("____Welcome to The Demo!!____");
    let playerInput = INPUT.question("Wusyaname?\n")
    player.name = playerInput;
    console.log(`Welcome ${player.name}!!!`)
    //begin at the practice room
     currentLocation = practiceRoom;
    // try to theme your game to your setting

    // your game loop
    while(gameIsOn) {
        checkAnswer(promptUser());
    }
    console.log("Thanks for playing")
}

function promptUser() {
    let question = INPUT.question("What wil you do: ");
    return question;
}

function checkAnswer(input) {

    inputMsg = input;

    //GO
    if (inputMsg.includes("go")) {
        let pathArray = inputMsg.split(" ");
        let pathLocation = pathArray[1];
        
        if(currentLocation.paths.includes(pathLocation)) {
            for(let i = 0; i < rooms.length; i++) {
                if(rooms[i].name.toLowerCase() == pathLocation.toLowerCase) {
                    let roomIndex = rooms[i];
                    console.log("You're in a new room")
                }
            }
        } else {
            console.log("You cant go there")
        }

        //LOOK          
    } else if (inputMsg.includes("look")) {
        for(let i = 0; currentLocation.objects.length; i++) {
            console.log(currentLocation.objects[i]);
        }

        for(let i = 0; i < currentLocation.paths.length; i++) {
            console.log(currentLocation.paths[i])
        }
        //TAKE
    } else if (inputMsg.includes("take")) {
        let itemsArray = inputMsg.split(" ");
        let item = itemsArray[1];

        if(currentLocation.objects.includes(item)) {
            player.items.push(item);

            let indexToRemove = currentLocation.objects.indexOf(item);
            currentLocation.objects.splice(INDEX, 1);
        } else {
            console.log("Item not found");
        }
        //Name
    } else if (inputMsg.includes("name")) {
        console.log(`${currentLocation.name} Description: ${currentLocation.description}`)
    } else if (inputMsg.includes("help")) {
            console.log(`What to do: 
        go - move to different locations and rooms
        help - this should be self explanatory`)
    } else if (inputMsg == "exit") {
        gameIsOn = false;
    } else {
        console.log(`${inputMsg} is one of the most horrifically atrocious things I have ever seen, ${inputMsg} is very invalid`)
    }

}

start();
