function addList(){
    var node = document.createElement("li");
    var textnode = document.createTextNode(prompt("Enter a new task..."));

    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}
