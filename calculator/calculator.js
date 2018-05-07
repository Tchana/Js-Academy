var outputArea = document.getElementById("outputArea");
var number = document.getElementById("btn");
var x;
function display(x){
    outputArea.innerHTML += ""+x;
    console.log("button clicked");   
}

function wipe(){
    // outputArea.innerHTML = "";
    //  console.log("cleared");

      if(outputArea.innerHTML += ""+x){
           outputArea.innerHTML = "";
       }else{
          outputArea.innerHTML == "0";
       }
    
}function evaluation(){
    outputArea.innerHTML = eval(outputArea.innerHTML);
    console.log("evaluated")
}


