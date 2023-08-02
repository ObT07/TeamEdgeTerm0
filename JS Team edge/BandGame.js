//This is the starter file for CYOA
//Use it to develop your skills as needed

/* TODO: 
        -How to add a storyline
        -How to travel between rooms
        -How to add prompts and stuff*/

const INPUT = require("readline-sync");

//an empty string to hold our user inputs
//the game loop will depend on this being true
//to keep track of where we are
//push any new rooms you create to this array

let inputMsg = "";
let gameIsOn = true;
let currentLocation = null;
let rooms = [];

// Creates Options and Results
// [0] = Question, [1] = Option A, [2] Option B, [3] = Result A, [4] = Result B
let  choices = [["Would you like to continue practicing or stop for the week?(A or B)", 
                "Continue practicing?", "Stop for the week?", "Lose band and player points", 
                "Gain band and player points"],
                ["Would you like to call your parents about your upcoming performance, or would you like to not all them and go to sleep?(A or B)", 
                "Call parents about the concert?", "Fall asleep like a dummy", "Your parents are so happy that you called are supportive", 
                "Your parents never knew about the performance"],
                ["Would you like to fall asleep on the van, or would you like to talk to your bandmates on the ride to the show(A orB)?",
                "Sleep on Van?", "Talk to your bandmates", "You fell asleep on the van and ended up delaying the show by 1 hour", 
                "You made it to the show successfully"],
                ["Would you like to practice your instrument while backstage(A or B)", "Practice your instrument?", "Don't practice your instrument",
                "Practicing your instrument made you more confident to perform", "Not practicing made you a lot less nervous"],
                ["VERY IMPORTANT QUESTION!!!! Do you play the Weezer cover at the concert or do you play the Nirvana cover?(A or B)", 
                "Play the Weezer cover?", "Play the Nirvana cover?", "You played the Weezer cover and got booed off of the stage,",
                "You played the nirvana cover and everyone liked it"]]

let title = ` 
    ******                                             **      ******** **            
    **////**                                           /**     **////// //             
   **    //   ******  *******   *****   *****  ****** ******  /**        ** ********** 
  /**        **////**//**///** **///** **///**//**//*///**/   /*********/**//**//**//**
  /**       /**   /** /**  /**/**  // /******* /** /   /**    ////////**/** /** /** /**
  //**    **/**   /** /**  /**/**   **/**////  /**     /**           /**/** /** /** /**
   //****** //******  ***  /**//***** //******/***     //**    ******** /** *** /** /**
    //////   //////  ///   //  /////   ////// ///       //    ////////  // ///  //  // `;

let guitar = `        :-===+==-:.                                                                       
     .=+++++++++++++=:.                ....                                               
    -*+++++++++*******++=:..  ..:-===+++++==.                                             
   =***********************+++++==--:::=++=.                                              
  -**********************+**-:=-.=-::-=+-.                                                
 .#****++++++*******####%@@@#===++++-+*                                                   
 =****+--:::::+**+-*@-:%@@@%@@-:%%%%**+-::::....................          -=--:..         
:*****+-=:::::-**+-#%-.%%%%%%%-:%**+*+*+**+***+*****+**+****+****+******=**+++=+=+--::..  
:#****+--:::-:-+*+-#%-.%%%%%%%-.%*+++++++++++===========================-==+++++++++++=++-
-******--::--=+++=-*@+=@@@@@@@*+@**.                                        -++++=-::++++=
=*************+=:=**###%##*++#%@%++                                          ..       ::: 
=*****++****==-::*+-%@@@@@+=--=-@**                                                       
.#**+++++*+::#*-:----==+##*====*@++:                                                      
 +*++++++*::-:--:.      ..:-====-:.                                                       
  -+++++++=:-:.                                                                           
`

let drums = `.:::::::::-+=-::..                                           ..           
             .:::::::::::--*+-------:::                                   ..:+*:::::::... 
             :::::::::::=++++-=---=---==-.                          .:-=-----=+---:::::.. 
              .::--:::::--==--============.                        .:-====-===::..        
                 .:---------+++++++++++===.                             ..  -:            
                     ..::--==*+*+*++++=-:                                   -.            
                    .::-     .......    .::..:+=-::==:--  ... :::.::.::     :             
                     .::              =+*#+##+%#**%#=#++=**=*+***##=#=*=::. :.            
                     :.=             -+%@%+#%+#+*+%###*=-##*#%+=++#*%=**-:: -.            
                      .=             :+#@@%%%**+#+%%*###=*@#%%+=#*%+%+*-+==-#:::..        
                       =              .#%%+*%**##=##=*+%-#%+*%+=*+%+**+=*#. =.            
                      .=.             :*%%#**+++*-=+**+#=:=:+--=+::-:..==-. -.            
                      :=.             -++-:::..:...:--=+++=-=+=+=-:..:--=.  +.            
                   .:::= ...::--:::.--++-.      .:::--+*+**+--+===+-.   =.  =.            
                   :+*===+****#**##*#%#**+-::::=+*##+#@@@%#+--+*+**.    =.  =             
                   .+*+*+#%%@@@#+%%@@@%#@-:    -*%##++***+::..:=***+=-::+:  =             
                   .#%=*+#%%%@@%*%%@@%@%@*+-   -=++++++=++*#%%%%%%%%%%@@@*--=.            
                  :.%%==+#%%@@@%*%%%@#+*@*+-:=-++++*+===*%%%#%####%#%%%#%%@@#:            
                  :.%@-++*#%%@@%*%@@@%-#@+ ++*%%%@##++*%%%%*.-+-+.*.-==:#%%%@%=           
                  :.%@-+=**#@@@%*%%@@%:@@+*+%@@@@@@%*%%%%%%*+*+**+*+*+#+%%%%%@@*          
                  :.%@-++#%%@@@%*%@%@%-@@#++%%%@%###%%%%%%%%%%%%%%%%%%%%%%%%%%@@#         
                 .-=#@-=+#%%@@@%*%@@@+-#%+#%@@@@%*#%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@+        
                  :.**==+#%%@@@#*%@@@#=%%*@@@@@@@#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@        
                  ::*#=++#%%@@@**%@@@%-@##@@@@#%%+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@:       
                  -.-=-+:--=++=++++*#*=***+++*#***%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@-       
                  -  .:+        ::.=: =.*++++==+*=#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@.       
                  : .+==:      .. :-: : -++**+===+#%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@%.       
                 .--. -=:-.  ::..:.:-.-.:=-=**=**+#%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@=-::     
               .:::   --:-:-=+. :...: -   -=+==*++**%%%%%%%%%%%%%%%%%%%%%%%%%%@@=:.-++:   
            .-=::.    :-.::::: ++   -...   .-+=++**++%%%%%%%%%%%%%%%%%%%%%%%%@%=  - **=-: 
         .--.  -:::.  .-. :::...    -. ..    .-=******#%%%%%%%%%%%%%%%%%%%%@@*- . .:.. .*-
       ..     :*           :#   ..      +.    - .-+**####%#%%%%%%%%%%%%%%@%+.  ::  :.     
   . ..                           ..    =.   .:       .  =+####%%%%%%%%#+:     .#. .#-    
 .#%:                              .=:       ++            ....:----:.              -:    
                                    =*-      **                                           
                                                            `;

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
// Create your player

let player = new Player();
player.name = null;
player.items = [];
player.health = 100;
player.practiceTime = null;

let band = new Band();
band.name = null;
band.health = 100;
band.practiceTime = null;

let practiceRoom = new Room();
practiceRoom.name = "Practice Area";
practiceRoom.description = "Glorified storage Unit";
practiceRoom.objects = ["Guitar", "Drums", "Chair"];
practiceRoom.paths = ["bedroom"];

let bedroom = new Room();
bedroom.name = "Bedroom";
bedroom.description = "Furniture includes: Tv, Mattress, Laptop, and guitar. Nothing of value";
bedroom.objects = ["Bed", "Mattress", "Tv", "Laptop"];
bedroom.paths = ["practiceRoom"];

let tourVan = new Room();
tourVan.name = "Tour Van";
tourVan.description = "1996 Ford Transit";
tourVan.object = ["Seat", "Bandmate", "Door"];
tourVan.paths = ["backstage"];

let backstage = new Room();
backstage.name = "Backstage";
backstage.description = "Backstage literally means backstage";
backstage.object = ["Instruments", "Seat", "Phone"];
backstage.paths = ["concert"];

// This is like the final boss level
let concert = new Room();
concert.name = "Concert Venue";
concert.description = "Once again the idea is in the name";
concert.object = ["Audience", "Microphone", "Guitar Pedals"];

// Create some rooms

//add the rooms to the rooms array

//************* START GAME *************************
function start() {

    // saves the player name
    console.log("_______________________________________________________________________________________________");
    console.log(title);
    console.log(guitar)
    console.log("_______________________________________________________________________________________________");
    

    let playerInput = INPUT.question("Welcome to the Concert Simulator! Whats your name?\n");
    player.name = playerInput;
    console.log(`Welcome ${player.name}!! Try to "enjoy" the game!!`);

    //begin at the bedroom
    currentLocation = practiceRoom;

    // try to theme your game to your setting

    // your game loop
    while(gameIsOn) {
        checkAnswer(promptUser());
    }
    console.log("Thanks for playing");
}

function promptUser() {
    let question = INPUT.question("What command you'd like to use\n").toLocaleLowerCase();

    return question;
}

function enterOptions(option) {    
    console.log(choices[0][option]);
    let question = INPUT.question("What choice: ")
    return ch
}

function checkAnswer(input) {

    let inputMsg = input;

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
    } else if(inputMsg.includes("take")){
        let itemsArray = inputMsg.split(" ");
        let item = itemsArray[1];

        if(currentLocation.objects.includes(item)) {
            player.items.push(item);

            let indexToRemove = currentLocation.objects.indexOf(item);
            currentLocation.objects.splice(INDEX, 1);
        } else {
            console.log("Item not found");
        }
    } else if(inputMsg.includes("help")) { // Help 
        console.log("____________________________________________");
        console.log(`Lost? 
        Enter "a" to chose Option A
        Enter "b" to chose Option B
        Enter "exit" to exit the game
        Enter "help" to, obviously, get help`)
        console.log("____________________________________________");
    } else if(inputMsg == "exit") {
        gameIsOn = false;
    } else if(inputMsg == "a") {
        console.log(promptUser());
    } // else {
    //     console.log(`${inputMsg} is one of the most horrifically atrocious things I have ever seen, ${inputMsg} is very invalid`);
    // }
}

start();