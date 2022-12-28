//To save 10,000 pesos, but 25% away from goal.
//Sam wants to save 10,000 pesos and has already saved 7,500.

//Store in a variable named savefor10k the amount to save in total.
let savefor10k = 10000; //goal to save in total.

//Store in a variable named currentsavings for the amount already saved at the moment.
let currentsavings = 7500;

//Store in a variable named percentageleft for the percentage away from the 10k saving goal.
let percentremaining = 100;

//Compute the total percentage left of the goal saved to savefor10k and currentsavings
//and store the result in a variable named percentageleft.
let percentageleft = (1-(currentsavings/savefor10k)) * percentremaining;
//Display the message using console.log.

console.log(`Thank you for your discipline and hardwork, Sam! You are now ${percentageleft}% from your goal of saving Php${savefor10k}.`);
//template literals