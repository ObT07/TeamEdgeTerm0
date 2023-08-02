/* -------------------------------------------- 

	You've just learned all about functions. 
	Now take what you've learned to create your own

					CALCULATOR!

	We'll guide you through the first few steps,
	then you'll have a chance to add your own features
	that will make this your new go-to calculator!

  -------------------------------------------- */

  const input = require('readline-sync');
  console.log(`My Simple Calculator`);

/* -------------------------------------------- 

Part 1: 

	The first features of any simple calculator is that
	it should be able to perform the basic math operations. 
	Let's start by writing the functions we'll need to execute 
	the following operations:

		Addition
		Subtraction

  -------------------------------------------- */

// Write a function called addNumbers that will take two numbers and return the sum.

const addNumbers = (num1, num2) => {
	let sum = (num1 + num2);
	return sum;
}

// Write a function called subNumbers that will take two numbers and return the difference.

const subNumbers = (num1, num2) => {
	let difference = (num1 - num2);
	return difference;
} 

/*------------*/
// Testing Code - Uncomment the code below to test your code!

checkAnswers(addNumbers(5, 15), 20); 
checkAnswers(addNumbers(3, 18), 21);
checkAnswers(addNumbers(12, 28), 40); 

checkAnswers(subNumbers(18, 7), 11);
checkAnswers(subNumbers(11, 9), 2);
checkAnswers(subNumbers(18, 21), -3);

/* -------------------------------------------- 

Part 2: 

	Now that you have addition and subtraction down, let's add the other operators we learned!

	Finish off your basic calculator by writing the functions 
	for the following operations:

		Multiplication
		Division 

  -------------------------------------------- */

// Write a function called multiplyNumbers that will take two numbers and return the product.

const multiplyNumbers = (num1, num2) => {
	let multiply = num1 * num2;
	return multiply;
}

// Write a function called divideNumbers that will take two numbers and return the quotent.

const divideNumbers = (num1, num2) => {
	let quotient = num1 / num2;
	return quotient;
}

/*------------*/
// Testing Code - Uncomment the code below to test your code!

checkAnswers(multiplyNumbers(10, 3), 30); 
checkAnswers(multiplyNumbers(21, 7), 147);
checkAnswers(multiplyNumbers(4, 16), 64); 

checkAnswers(divideNumbers(24, 100), `.24`);
checkAnswers(divideNumbers(21, 7), `3`);
checkAnswers(divideNumbers(15, 4), `3.75`);

/* -------------------------------------------- 

Part 3: 

	Now that you have your basic functions in place, you need to get some user input.
	What's a calculator for if no one is using it?

Write a function that will prompt the user for the operation they want to call and the values they are inputting.

  -------------------------------------------- */

let prompt = input.question("What operation would you like to call(+,-,/,*):\n")

if (prompt == '+') {
	let add1 = parseFloat(input.question("Enter first number\n"));
	let add2 = parseFloat(input.question("Enter second number\n"));
	console.log(addNumbers(add1, add2));
} else if (prompt == '-') {
	let sub1 = parseFloat(input.question("Enter first number\n"));
	let sub2 = parseFloat(input.question("Enter second number\n"));
	console.log(subNumbers(sub1, sub2));
}  else if (prompt == '/') {
	let div1 = parseFloat(input.question("Enter first number\n"));
	let div2 = parseFloat(input.question("Enter second number\n"));
	console.log(divideNumbers(div1, div2));
}  else if (prompt == '*') {
	let mult1 = parseFloat(input.question("Enter first number\n"));
	let mult2 = parseFloat(input.question("Enter second number\n"));
	console.log(multiplyNumbers(mult1, mult2));
} else {
	console.log("Enter a valid input");
}

/* -------------------------------------------- 

Part 4: 

	Now that you have all of the basic four operations completed, you get to add your own features!
	What will you add to make this your go-to calculator? 

	Stuck? : Think about what you count/calculate on a (almost) daily basis.
	Can you write a function that will take in the data you need and do the calculation for you? 

	(I know I calculate how many hours of sleep I get every day... ｡(*^▽^*)ゞ )

  -------------------------------------------- 

Write a function or functions that will add some unique features to your calculator. 
Don't forget to:
		Give your function an name and parameters that are self explanatory and written in camelcase!
		Use comments throughout your code
		Test your code!
  
  -------------------------------------------- */

const timeManager = (freeTime, extracurricular, sleep, chores) => {
	studyTimeCalculator = 24 - (freeTime + extracurricular + sleep + chores);
	return studyTimeCalculator;
}

console.log(timeManager(3, 7, 8, 2));

/* -------------------------------------------- */
// Ignore this section. This is just for checking your work

function checkAnswers(genAnswer, correctAnswer){
	if(genAnswer == correctAnswer){
		console.log(`Your code works!`)
	}
	else{
		console.log(`Try again, your code generated ${genAnswer} but the correct answer is ${correctAnswer}`);
	}
}