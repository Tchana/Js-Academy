let x, y;
var sum;

x = prompt("Enter the value of x");
alert("The value of x is " + x);
y = prompt("Enter the value of y");
alert("The value of y is " + y);

//function to add 2 numbers
function addition(a, b){
    var sum = a + b; 
    //return a + b;
    return sum;
}

function division(a, b) {
    var answer;
    answer = a / b;
    return answer;
}

function multiplication(a, b){
    var product = a * b;
    return product;
}

function subtraction(a, b){
    var difference;
    difference = a - b;
}

function modulo(a, b){
    var modulo = a % b;
    return modulo;
}


modulo(8, 5);
subtraction(9, 6);
multiplication(5, 5);
addition(4, 5);
division(8, 3);
console.log(sum(4, 5)); // output 9


var ans = true;

if(ans === 0){
    console.log('Answer is true');
}
 else if(ans === 1) {
    console.log('Answer is false');
    }else {
        console.log('Answer is invalid');
    }


    var name = 'John';
    var i = 0;
    while(i < 10){
        console.log('my name is ' + name);
        console.log(i);
        i = i + 1;
    }


    //programming idioms
    //i++
    //i--
    //--i
    //++i


    //The for loop 
    for(var p = 0; p < 10; p++){
        console.log(p);
    }


    //If statement  => if (condition){}

    //while loop
    /*
        initialisation
        while(condition){}
        */
       //do while loop
       /*
       initialisation
       do {} while(condition)
       */

       //for loop
       //for(initialisation; condition; increment/decrement)

       for(var k = 0; k < 10; k++){
           if ((k % 2) == 0){
               console.log(k)
               break;
           }
       }

       //if (condition){}

       function evenOrOddfunction(value){
           if ((value % 2) == 0){
               return true;
           }

           return false;
       }

    
       var age = 10;
       if (age < 10){
           console.log('young man');
       }else if(age >= 10 || age <= 20){
           console.log('youth');
       } else{
           console.log('adult');
       }
       


       switch(age) {
            case 10:
            console.log('young man');
            break;
           
            case 20: 

            console.log('adult');
            break;

            default:
            console.log(invalid);
            break;
       }







       