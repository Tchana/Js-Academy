//Why pay a fortune teller when you can just program your fortune yourself?


function tellFortune(numberOfchildren, partName, geolocation, jobTitle){
    console.log("You will be a " + jobTitle + " in " + geolocation + ", and married to " + partName
    + " with " + numberOfchildren + " kids");
}


tellFortune(3, "Cris", "Buea", "Terrorist");

tellFortune(2, "Jisele", "Limbe", "Accountant");

tellFortune(5, "Lolipp", "Bafoussam", "Doctor");



//You know how old your dog is in human years, but what about dog years? Calculate it!

function calculateDogAge(puppyAge, dogYear){

    dogYear = puppyAge * 7;

    console.log("Your doggie is " + dogYear + " years old in dog years!");
}


calculateDogAge(8);
calculateDogAge(3);
calculateDogAge(6);



//The Geometrizer

function calcCircumference(radius){
    return 2 * Math.PI * radius;
}

console.log("The circumference of this circle is " + calcCircumference(5))

function calcArea(radius){
    return Math.PI * radius * radius;
}

console.log("The radius of this circle is " + calcArea(4));




//It's hot out! Let's make a converter based on the steps here.
var celciusTemp = prompt("Enter the temperature in degree celcius");
console.log(celciusTemp + "°C is " + celsiusToFahrenheit() + "°F");

var fahrenheitTemp = prompt("Enter the temperature in degree fahrenheit");
console.log(fahrenheitTemp + "°F is " + fahrenheitToCelsius() + "°C");


function celsiusToFahrenheit(){
    return (celciusTemp * (9/5)) + 32;
}

function fahrenheitToCelsius(){
    return (fahrenheitTemp - 32)* (5/9);
}