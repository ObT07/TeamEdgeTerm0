/* -------------------------------------------- 

	You've just learned about variables, conditionals, functions, and user input. 
	You've also created a basic calculator in a previous project.
	
	Now imagine you are going out to eat with two other friends.
	Are you at a restaurant for a meal? Are you grabbing boba? Or are you just going to an ice cream parlor?
	At the end of the meal, you and your friends have to split the bill. 

	Wouldn't it be great if we could automate that math?

					Let's try it!

  -------------------------------------------- 

Scenario Parameters: 

	When you and your friends eat out, each of you have the option to order one or multiple items.
	What kind of items are available to order?

	At the end of the order, the receipt comes and you all have to calculate the cost for each person:
	Don't forget the tax and tip!

After this program finishes running, it should output a specific total for each person

  -------------------------------------------- */

const READLINE = require("readline-sync");

let pOneTotal;
let pTwoTotal;
let pThreeTotal;
let pOnePostTaxTotal;
let pTwoPostTaxTotal;
let pThreePostTaxTotal;
let total;
/* -------------------------------------------- 

Part 1:
Let's start by asking taking the order of the group(you and two friends). What did each person order?

Write a function that will take the group's order:
- Prompt the user to enter the price of each item they ordered
- Return the cost 

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */

const calculateTotalPrice = () => {
	let prompt = Number(READLINE.question("What was the price of your first meal($):\n"));
	let prompt2 = Number(READLINE.question("What was the price of your drink($):\n"));
	let totalPrice = prompt + prompt2;
	return totalPrice;
}	

let cost = calculateTotalPrice();
/* -------------------------------------------- 

Part 2:
Now that you have the costs of everything ordered, let's calculate the cost of each person's order(including tip and tax).

Write a function that will calculate the cost of each person's order, including:
- Cost of all of their ordered items
- Tax (Look up the sales tax of your city)
- Tip (Give the user the option to enter how much they want to tip)

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */


const calculatePriceWithTaxTip = (cost) => {
	let costOfItemsTax = (cost * 0.06) + cost;
	console.log(`${costOfItemsTax} is your total price with tax`);
	let prompt = READLINE.question("Would you like to add a tip(Y or N)?\n");
	let priceWithTip = 0;
	
	if (prompt == 'Y') {
		let prompt2 = Number(READLINE.question("How much of a tip would you like to add\n"));
		let tip = Number(prompt2 + costOfItemsTax);
		let priceWithTip = tip + costOfItemsTax;
	} else if (prompt == 'N') {
		console.log(`Ok your total order is ${costOfItemsTax}`);
	} else {
		console.log("Enter a valid operation");
	}
	return priceWithTip;
	return costOfItemsTax;
}
/* -------------------------------------------- 

Part 3:
Let's print out a receipt for each person.

Write a function that will take the values of each person's order and total cost and print it out in an appealing way.

The receipt should include:
- Cost of each item
- Total cost for each person

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */



const groupOrder = () => {
	// List name then order
	pOneTotal = calculateTotalPrice();
	pOnePostTaxTotal = calculatePriceWithTaxTip();
	pTwoTotal = calculateTotalPrice();
	pOnePostTaxTotal = calculatePriceWithTaxTip();
	pThreeTotal = calculateTotalPrice();
	pThreePostTaxTotal = calculatePriceWithTaxTip();
	return pOnePostTaxTotal + pOnePostTaxTotal + pThreePostTaxTotal;
}

console.log(groupOrder());

// groupOrder("Dave", "Bob", "Frank");
// console.log(total + " is the total receipt")

/* -------------------------------------------- 

Part 4: Upchallenges!

How many of these upchallenges can you implement?

- Make sure the user is only entering numbers. If they enter an invalid value, prompt them to re-enter. 
- The displayed prices should only have two decimal places.
- Can you adjust your program to account for any shared items ordered for the group?
- Display the tax and tip values
- Implement a rewards system (stamp cards, buy one get one, etc)

-------------------------------------------- */
