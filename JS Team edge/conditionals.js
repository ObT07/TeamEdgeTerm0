
/* -------------------------------------------- 
Day 2 Challenges
-------------------------------------------- */

let message = `Welcome to Day 2
Today we are learning about conditionals. 
Let's practice writing some conditionals of our own!`;
console.log(message);

const READLINE = require("readline-sync");
/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")
/* Can you drive?
    Prompt the user to enter their age.
    Write conditional statements that print out whether you can drive in your city. */


let prompt = READLINE.question("Enter your age \n");


if (prompt < 16) {
    console.log("You cant drive");
} else {
    console.log("You can drive");
}

/* -------------------------------------------- */

console.log("------------------- Challenge 2 -------------------") 

/* Who placed first?
    Write conditional statements that checks which is the highest and prints the highest score. 
    Hint: Create three variables and assign them random scores. */

let score1 = READLINE.question("Enter your score \n");
let score2 = READLINE.question("Enter your score \n");
let score3 = 0;

if (score1 > score3 && score1 > score2) {
    console.log("Higest score is score 1");
} else if (score2 > score1) {
    console.log("Highest score is score 2");
}



/* -------------------------------------------- */

console.log("------------------- Challenge 3 -------------------")

/* One of the most common parts of our daily routine is checking the weather. 
   Our outfit and accessories are dependent on the temperature and conditions outside. 
   ie. We're probably not going to wear shorts out when it's snowing...


**** Challenge 3: Part 1 ****
   Write a conditional statement that checks the value of the weather variable 
   and prints out a weather report based on the current weather:
   Rainy: Bring an umbrella
   Sunny: Wear a hat and sunglasses
   Snowing: Wear gloves and a scarf */

//Here's a variable to get you started:
let weather1 = READLINE.question("What is the weather looking like?(rainy, sunny, snowing) \n");


if (weather1 == `rainy`) {
    console.log("BRING AN UMBRELLA");
} else if (weather1 == `sunny`) {
    console.log("Wear a hat and sunglasses :)");
} else if (weather1 == 'snowing') {
    console.log("Wear gloves and a scarf");
}


//Tip: Try changing the value of the weather variable to test your other conditions.

/**** Challenge 3: Part 2 ****
   Now that you've written conditions for specific weather forecasts, let's also add in temperature! 
   You can't dress accordingly if you only know that it's raining outside but not how cold it is!
   For example:
      If it's raining and 60 degrees, you might want to bring your umbrella and wear a light jacket.
      However, if it's raining and 30 degrees, you might want to break out a warmer jacket with your umbrella instead. 
    
   Add to your conditional statements above and modify your weather reports to also take into account the temperature. 
   Make sure to account for at least three different temperatures!
   Hint: You will need another variable to keep track of the temperature.
*/

let temp = READLINE.question("Enter the temperature: \n");

if (temp <= 100) {
    console.log("Wear shirt and shorts");
} else if (temp < 70) {
    console.log("Bring a jacket");
} else if (temp < 40) {
    console.log("Bring warm jacket");
}

/* -------------------------------------------- */

console.log("------------------- Challenge 4 -------------------")

/* Prompt the user to enter the day of the week (1-7 representing Monday - Sunday)
    Write a set of conditionals that will take a number from 1 to 7 
    and print out the corresponding day of the week. 
    Make sure to add a statement that accounts of any numbers out of range! */

let day = READLINE.question("Whay day of the week is it(Enter a number from 1-7): \n");

if (day == 1) {
    console.log("Monday");
} else if (day == 2) {
    console.log("Tuesday");
} else if (day == 3) {
    console.log("Wensday");
} else if (day == 4) {
    console.log("Thursday");
} else if (day == 5) {
    console.log("Friday");
} else if (day == 6) {
    console.log("Saturday");
} else if (day == 7) {
    console.log("Sunday");
} else {
    console.log("Invalid date");
}

/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")

/* A leap year is a calendar year that contains an additional day added 
    to keep the calendar year synchronized with the astronomical year or seasonal year.
    To calculate if a specific year is/was a leap year, you can follow the following steps:
      1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
      2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
      3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
      4. The year is a leap year (it has 366 days).
      5. The year is not a leap year (it has 365 days).

  Those are a lot of conditions...

  Your challenge is to translate the steps above into conditionals which will evaluate if the 
  year stored in a variable is/was a leap year.*/







