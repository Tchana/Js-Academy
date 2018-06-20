var level = "beginner";

var person = {
    name: "Valdo",
    age: 19,
    height: 175,
   promote: function(){
        this.level = "intermediary";
   }
};
document.write(person);
person.name = "Cedric";
console.log(document);

console.log(window.document);
