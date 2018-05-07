var numberOfChildren = prompt("How many children do you want to have?");
var partnerName = prompt("Who is your partner?");
var jobTitle = prompt("What's your job?");
var geoLocation = prompt("What is your present location?");


console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName
+ " with " + numberOfChildren + " kids");


var yearOfBirth = prompt("Enter your year of birth");
var nextYear = prompt("In which year will we be next year?");

console.log("I will be either " + (nextYear - yearOfBirth) + " or " + (nextYear - yearOfBirth - 1) + " in " + nextYear);


var age = prompt("What age are you?");
var oldAge = prompt("Estimate at what age you think you can die");
var estimatedAmount = prompt("How much money do you think you can spend a day?");
var amountNeeded;

amountNeeded = estimatedAmount * (oldAge - age) * 365;

console.log("You will need at least " + amountNeeded + " to last untill the ripe old age of " + oldAge);



var tempCelcius = prompt("What's the temperature in degree celcius?");
var fahrenheit;

fahrenheit = (tempCelcius * (9/5)) + 32;
console.log(tempCelcius + "°C is " + fahrenheit + "°F.")

var tempFahrenheit = prompt("What's the temperature in fahrenheit?");
var inCelcius;

inCelcius = (tempFahrenheit - 32)* (5/9);

console.log(tempFahrenheit + "°F is " + inCelcius + "°C.")
