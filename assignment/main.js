function showCoord(event) {
    var x = event.clientX;
    var y = event.clientY;
    var t = new Date();

    document.getElementById("xaxis").innerHTML = x;
    document.getElementById("yaxis").innerHTML = y;
    document.getElementById("time").innerHTML = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
    document.addEventListener("click", myfunction);
}

function myfunction(event){
    
    var x = event.clientX;
    var y = event.clientY;
    var t = new Date();

    document.getElementById('Instances').innerHTML += "<div>" + "X:" + x + "<br>" + "Y:" + y + "<br>" + "T:" +   t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + "</div>";  

}