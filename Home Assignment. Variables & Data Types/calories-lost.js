//Cycling for 30 minutes burns 225 calories.
//Sam decides to do cycling for 30 minutes every day for 15 days.

//Store in a variable named caloriesPer30mins the number of calories burned per 30mins.
let caloriesLostPerMinute = 225; //cycling for 30 minutes burns 225 calories.

//Count the number of times Sam will do cycling for 15 days and store in a variable named numTimesSamDoCycling.
let numTimesSamDoCycling = 15;

//Store in a variable named cyclingPerMinutesPerDay the number of minutes Sam has decided to do cycling.
let cyclingPerMinutesPerDay = 30/60;

//Compute the total number of minutes of cycling for 15 days using numTimesSamDoCycling and cyclingPerMinutesPerDay
//and store the result in a variable named averageCaloriesLost.
let averageCaloriesLost = numTimesSamDoCycling * caloriesLostPerMinute;

//Compute the total calories burned using caloriesLostPerMinute and totalminutesDoCycling.
let totalminutesDoCycling = caloriesLostPerMinute * numTimesSamDoCycling;
//Display the message using console.log.

console.log(`Great work, Sam! After ${cyclingPerMinutesPerDay} hours of cycling everyday for a week, you may lose a total of ${totalminutesDoCycling} calories.`);
//template literals